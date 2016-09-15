'use strict';

describe('Slugifier', function() {
  var Slugifier;

  beforeEach(function() {
    module('slugify')

    inject(function(_Slugifier_) {
      Slugifier = _Slugifier_;
    });
  });

  it('should remove all special characters', function() {
    var test = 'Un éléphant à l\'orée du bois',
        expected = 'Un elephant a l\'oree du bois';

    expect(Slugifier.removeDiacritics(test)).toEqual(expected);
  });
  it('should slugify a given string', function() {
    var test = 'Un éléphant à l\'orée du bois',
        expected = 'un-elephant-a-loree-du-bois';

    expect(Slugifier.slugify(test)).toEqual(expected);
  });
});