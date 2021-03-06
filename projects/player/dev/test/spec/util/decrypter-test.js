var decrypter = require('util/decrypter');

// test data 
var encryptedVideo = {
    "salt": "N507eTfGOOkzvaSlxT0JpaO7kEzWfoYp",
    "encrypted": "1",
    "data": "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"
	},
	correctPW = 'videopath';


describe('Util: Decrypter', function() {

	it('should return false on a wrong password', function() {
        var result = decrypter.decrypt('somepassword', encryptedVideo.salt, encryptedVideo.data);
        expect(result).to.equal(false);
    });

    it('should be able to decrypt a video', function() {
        var result = decrypter.decrypt(correctPW, encryptedVideo.salt, encryptedVideo.data);
        expect(result).to.not.equal(false);
        expect(result.title).to.equal('REST+JSON API Design - Best Practices for Developers');
    });

});