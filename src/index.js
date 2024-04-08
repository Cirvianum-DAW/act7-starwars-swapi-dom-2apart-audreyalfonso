import act7 from './act7.js';

console.log('Benvingut a MP6 de DAW!');

act7.setMovieHeading('', '.movie__title', '.movie__info', '.movie__director');
act7.initMovieSelect('#select-movie');
act7.setMovieSelectCallbacks();
// act7.deleteAllCharacterTokens();
act7.addChangeEventToSelectHomeworld();
