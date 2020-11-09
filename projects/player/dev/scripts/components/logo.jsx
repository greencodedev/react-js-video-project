require('css/components/logo.scss');

var _ = require('underscore'),
	React = require('react');


function onClick() {
	window.open('http://videopath.com');
};

function Logo(props) {

	return <div className='vpp_logo'>
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 width="100px" height="26.5px" viewBox="0 0 999.489 265.082" onClick={onClick}>
		<g fill={props.color}>
			<path d="M2.298,2.298C1.005,3.447,0,6.034,0,8.044c0,2.873,53.292,92.938,58.032,97.821c1.149,1.293,13.215-3.16,50.707-18.673
				c27.149-11.205,49.271-20.828,49.271-21.259C158.009,64.64,9.768,0,6.895,0C5.602,0,3.447,1.006,2.298,2.298z"/>
			<path d="M154.705,75.843c-73.546,30.597-91.501,38.497-90.783,40.365c2.442,6.177,60.331,99.545,62.916,101.411
				c4.741,3.305,13.934,2.731,18.387-1.147c3.878-3.305,108.02-161.887,110.175-167.92c2.154-5.459-1.58-11.349-6.751-11.061
				C247.355,37.491,205.123,54.729,154.705,75.843z"/>
			<path d="M476.896,83.169c-12.21,2.442-12.21,2.442-12.641,7.183l-0.43,4.74l8.76-1.007c8.333-1.005,8.907-0.861,8.189,1.581
				c-0.576,1.581-2.873,11.778-5.457,22.839c-2.443,11.062-4.598,20.254-4.886,20.54c-0.143,0.145-3.159-1.006-6.606-2.584
				c-6.896-3.018-17.525-3.734-23.702-1.437c-12.209,4.74-24.132,20.828-30.74,41.369c-5.171,15.945-6.033,28.44-2.298,34.043
				c2.872,4.453,10.486,9.337,14.651,9.337c5.458,0,18.243-7.757,28.298-17.094c5.604-5.171,9.768-8.474,9.338-7.325
				c-0.432,1.149-1.58,5.889-2.587,10.343c-1.579,6.607-1.579,8.618,0,10.485c2.299,2.873,11.922,2.873,20.253,0
				c6.034-2.155,6.466-2.585,5.892-6.607c-0.432-3.305-1.149-4.166-3.018-3.448c-5.746,2.299-10.198,2.443-10.198,0.576
				c0-1.15,6.177-29.017,13.79-61.912c11.347-49.125,13.501-60.33,12.065-62.196C493.416,80.01,492.697,80.01,476.896,83.169z
				 M463.395,148.384l4.453,2.873l-2.729,11.491c-1.437,6.321-3.734,13.646-4.884,16.231c-3.305,6.751-23.847,26.001-29.592,27.58
				c-10.198,2.872-13.215-4.31-9.193-21.546c3.447-15.083,7.758-24.851,13.934-31.89
				C444.003,143.356,453.483,141.632,463.395,148.384z"/>
			<path d="M933.972,83.744c-12.93,2.873-13.359,3.016-12.93,6.608c0.433,3.589,0.861,3.733,8.763,3.733
				c6.321,0,8.188,0.431,8.188,2.156c-0.144,1.148-6.465,28.871-14.222,61.478l-14.076,59.326l7.183-0.432l7.181-0.431l5.173-20.109
				c5.745-22.554,8.475-27.724,19.247-37.492c12.641-11.491,25.425-15.081,27.293-7.757c1.006,4.022-2.298,18.962-9.48,42.662
				c-5.891,19.106-6.177,20.685-3.879,22.696c2.874,2.585,11.349,2.729,21.546,0.575c6.754-1.437,7.326-1.868,6.895-5.314
				c-0.43-3.736-0.718-3.879-7.898-3.448l-7.471,0.431l3.591-10.486c5.604-16.089,12.066-42.375,12.066-48.551
				c0-8.044-7.469-15.802-15.226-15.802c-7.614,0-19.105,6.178-30.021,16.089l-9.051,8.331l9.479-36.772
				c9.194-35.624,9.337-36.916,6.752-38.784C949.772,80.01,950.633,80.01,933.972,83.744z"/>
			<path d="M383.96,96.242c-1.725,0.718-4.166,2.872-5.603,5.026c-2.01,3.018-2.01,4.309-0.575,7.757
				c3.161,7.614,12.929,8.332,17.812,1.292c3.017-4.165,2.872-7.324-0.144-10.916C392.291,95.811,388.125,94.661,383.96,96.242z"/>
			<path d="M876.083,113.766c-5.028,1.293-5.459,1.868-7.9,11.348c-2.299,9.192-2.873,9.912-6.463,9.912
				c-9.052,0-12.498,1.58-13.073,5.889c-0.719,4.166-0.574,4.166,7.039,4.166c6.752,0,7.756,0.288,7.037,2.442
				c-2.729,8.906-10.916,50.131-10.916,55.015c0,4.885,0.861,6.895,4.885,10.916c4.452,4.454,5.746,4.886,13.07,4.886
				c4.454,0,12.642-1.007,18.099-2.442c9.912-2.298,9.912-2.298,9.912-7.183c0-4.021-0.43-4.74-2.442-4.164
				c-1.434,0.431-6.606,1.436-11.347,2.297c-10.487,1.725-15.945,0.287-17.095-4.74c-0.86-3.018,5.315-36.198,9.338-51.281
				l1.58-5.745h14.938c13.933,0,15.083-0.143,15.083-2.73c0-1.578,0.43-3.733,0.861-5.026c0.718-2.011-1.005-2.298-13.646-2.298
				c-16.52,0-15.802,0.718-12.497-13.217c1.868-7.469,1.724-10.054-0.431-9.622C881.685,112.33,878.956,112.904,876.083,113.766z"/>
			<path d="M724.395,133.588c-7.613,1.725-16.662,7.9-25.999,17.813c-4.886,5.313-9.049,9.479-9.481,9.479
				c-0.286,0,0.575-5.315,2.013-11.922c3.447-15.658,2.729-16.52-11.779-14.077c-15.515,2.585-15.515,2.729-15.515,7.468
				c0,4.31,0,4.31,7.615,4.023c5.744-0.288,7.468,0.144,7.182,1.724c-0.432,3.305-20.686,108.021-21.548,111.468
				c-0.718,3.16-0.288,3.304,6.322,3.304h7.181l4.599-23.271c2.584-12.929,4.881-24.275,5.169-25.138
				c0.431-1.293,2.012-1.007,5.746,1.148c6.895,4.022,19.68,4.166,27.58,0c16.374-8.187,30.452-36.629,30.596-60.904
				c0-9.193-2.442-15.227-7.47-18.53C731.576,133.014,729.422,132.583,724.395,133.588z M726.838,147.953
				c3.447,3.448,3.59,9.767,0.717,23.413c-4.309,20.398-14.651,35.623-25.137,37.205c-5.316,0.717-13.935-2.012-17.525-5.746
				c-2.585-2.586-2.585-3.16-0.574-12.354c1.292-5.171,3.591-12.065,5.171-15.226c4.166-8.043,19.104-23.7,26.288-27.148
				C723.246,144.362,723.246,144.362,726.838,147.953z"/>
			<path d="M821.066,137.18l-2.297,5.17l-4.885-3.733c-10.63-8.044-23.127-6.608-34.618,3.733
				c-9.337,8.764-17.812,24.707-22.265,42.09c-4.598,18.241-3.448,24.992,5.459,31.744c8.474,6.32,20.685,1.436,37.346-14.796
				c4.167-4.021,7.471-7.039,7.471-6.607c0,0.433-1.005,4.885-2.298,9.912c-1.869,7.47-2.013,9.768-0.575,11.491
				c2.154,2.585,12.497,2.729,20.828,0.144c5.028-1.437,5.745-2.155,5.745-5.89c0-4.598-0.287-4.739-9.624-2.872
				c-4.596,0.861-5.17,0.718-4.596-1.726c1.582-7.469,15.081-60.76,16.375-65.068c0.719-2.731,1.438-5.172,1.438-5.172
				c0-0.145-1.581-0.718-3.449-1.15c-1.866-0.43-4.452-1.29-5.745-1.722C823.796,132.152,822.646,133.444,821.066,137.18z
				 M806.701,146.373c3.306,1.58,6.609,3.878,7.472,5.313c2.153,3.736-4.022,25.139-9.336,32.608
				c-5.748,7.899-18.53,18.961-25.138,21.69c-4.742,2.011-5.46,2.011-7.472,0c-6.319-6.32,1.437-38.353,13.072-53.435
				c3.304-4.454,10.343-8.765,14.077-8.765C800.238,143.786,803.543,144.938,806.701,146.373z"/>
			<path d="M277.663,136.031c-8.619,2.009-9.049,2.297-9.049,6.318c0,4.023,0.144,4.167,7.182,4.167h7.182l-1.006,35.911
				l-0.861,35.911h8.188h8.332l10.773-10.485c17.667-16.951,35.911-47.26,38.496-63.635c0.862-4.597,0.431-6.179-2.011-8.332
				c-2.729-2.442-3.735-2.586-14.508-0.719c-9.193,1.438-11.491,2.299-11.491,4.31c0,5.746,1.436,6.751,8.188,5.891l6.463-0.718
				l-1.005,4.882c-2.873,13.504-19.392,41.083-31.458,53.005l-6.608,6.322v-4.454c0-5.172,2.442-44.242,3.591-57.458
				C299.209,133.301,296.049,131.578,277.663,136.031z"/>
			<path d="M373.473,135.025c-2.729,0.574-7.469,1.58-10.342,2.012c-4.884,0.86-5.458,1.436-5.458,5.17
				c0,4.021,0.144,4.166,8.331,4.598l8.476,0.43l-7.758,32.896c-7.182,30.883-7.469,33.037-5.313,35.623
				c4.452,4.74,29.303,2.154,29.303-3.159c0-6.034-1.149-6.896-7.9-5.316c-3.591,0.862-6.895,1.149-7.326,0.576
				c-0.574-0.432,2.729-16.52,7.326-35.48c8.906-37.636,8.906-38.929,0.144-38.642C380.512,133.876,376.203,134.449,373.473,135.025z
				"/>
			<path d="M531.912,136.605c-7.901,3.878-20.684,17.668-25.425,27.437c-17.094,35.479-5.598,60.043,25.281,53.577
				c11.205-2.297,28.441-10.054,28.441-12.784c0-1.004-0.86-2.873-1.866-4.309c-1.868-2.586-2.156-2.441-7.613,0.288
				c-9.193,4.739-21.835,7.899-27.292,6.751c-8.188-1.438-11.206-9.194-8.763-22.409l1.006-5.171l11.779-1.149
				c22.119-1.867,34.329-7.757,38.352-18.386c3.446-9.049,0.144-19.104-7.757-23.988
				C551.733,132.583,539.957,132.583,531.912,136.605z M550.012,147.378c6.319,8.045,1.722,16.52-10.342,19.824
				c-10.631,2.872-21.116,4.021-21.116,2.153c0-3.879,7.757-17.381,12.35-21.259C537.515,142.207,545.703,141.919,550.012,147.378z"
				/>
			<path d="M608.187,137.037c-13.214,6.176-23.27,19.392-28.154,36.628c-8.331,30.309,4.021,48.839,30.022,44.674
				c9.767-1.58,15.227-4.598,22.695-12.354c11.779-12.354,19.248-33.47,17.237-48.838
				C647.545,136.749,628.44,127.555,608.187,137.037z M627.005,143.644c5.889,2.155,8.331,10.055,7.472,22.982
				c-1.727,24.562-13.936,43.094-28.588,43.094c-4.165,0-6.033-1.006-9.05-4.597c-3.733-4.452-3.878-5.17-3.304-17.669
				c1.149-20.971,8.475-36.916,19.967-42.662C619.104,141.776,621.689,141.632,627.005,143.644z"/>
		</g>
	</svg>
	</div>;
};

Logo.defaultProps = {
	color:'white'
};

/*
 *	Class
 */
module.exports = Logo;


