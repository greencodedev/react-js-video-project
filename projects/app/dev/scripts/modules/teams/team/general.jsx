var React = require('react'),
	s = require('strings')('teams.team'),
    $ = require('jquery'),
	
	Button = require('components/button'),
    Icon = require('components/icon'),

	// mixins
	BackboneMixin = require('mixins/backbone'),
	UtilsMixin = require('mixins/utils'),
	Forms = require('components/forms'),

    config = require('sdk/config'),
    s3_uploader = require('sdk/util/s3_uploader'),

	RenameTeamOp = require('app/operations/renameTeam'),
	UpdateDescOp = require('app/operations/updateDesc');


function renameTeam() {
	RenameTeamOp({team:this.props.team});
};

function updateDesc() {
	UpdateDescOp({team:this.props.team});
};

function r() {

	var team = this.props.team,
		renameIcon, updateDescIcon, projectThumbnail;

	if ( team.userCanEdit() ) {
		renameIcon = <Icon type='edit' onClick = {renameTeam.bind(this)}/>;
		updateDescIcon = <Icon type='edit' onClick = {updateDesc.bind(this)}/>;
        projectThumbnail =
                <Forms.Form
                    submitButtonTitle = {s('btn_submit')}
                    onSubmit = {this.onSubmit}
                    ref = 'thumb_form'>
                        <div style={{ width:"200px", height: "165px", textAlign: "left", marginTop: "5px" }}>
                            <span><b>Custom Thumbnail</b></span>
                            <Forms.Input 
                                id='cover'
                                style={{ display:"none" }}
                            />
                            <div style={{ border: "solid 1px #c6c6c6", textAlign: "center" }}>
                            <img src={this.state.project_thumb_url } style={{ width:"192px", height: "108px" }} />
                            <div style={{ textAlign: "center", width: "100%" }}><a style={{cursor:'pointer'}} onClick={this.onUploadOwnClick} className=".upload_avatar">Upload Your Own</a><input type="file" onChange={this.onFileSelected} style={{display:'none'}} className="upload_field"/></div>
                            </div>
                        </div>
                </Forms.Form>

	}

	return (
		<div>
			<h2>{'Project ' + this.props.team.get('name')} {renameIcon}</h2>
            <p><b>Description</b><br/>{this.props.team.get('description')} {updateDescIcon}</p>
            {projectThumbnail}
			<p>
				Created { this.utils.timeago(team.get('created')) } <br />
				Owned by {team.get('owner').email}
			</p>
		</div>
	);
};


module.exports = React.createClass({
	mixins: [BackboneMixin, UtilsMixin],

    getInitialState: function() {
        var thumb =  "//app.videopath.com/style/img/vp_project_default.png";
        var project_cover = this.props.team.get('actual_cover');
        if (project_cover != null && project_cover.length > 0) {
            thumb = project_cover;
        }

        return {
            project_thumb_url: thumb 
        };
    },

    onUploadOwnClick: function() {
        $(".upload_field")[0].click();
    },

    setProjectThumbnail: function(url) {
        this.setState({'project_thumb_url':url})
    },

    uploadProjectThumbnail: function(file) {
        return s3_uploader.uploadFile(
            file,
            config.urls.uploadImageTicketURL + 'project_cover/' + this.props.team.get('id') + '/',
            config.urls.uploadImageCompleteURL
        );
    },

    onFileSelected: function() {
        var form = this.refs.thumb_form
        form.setState({'loading': true});

        var files = $(".upload_field")[0].files;
        var _this = this;
        if (files.length > 0) {
            this.uploadProjectThumbnail(files[0]).
            then(function(data) {
                var localURL = URL.createObjectURL(files[0]);
                _this.setProjectThumbnail(localURL);
                var image_id = data.ticket_id;
                $("#cover").val(image_id);
                form.setState({'loading': false});
            });

        } else {
            form.setState({'loading': false});
        }
    },

	render: r,
	componentDidMount: function(){
	},
	backboneProps: ['team'],
	propTypes: {
	    team: BackboneMixin.PropTypes.Model.isRequired,
	},
});
