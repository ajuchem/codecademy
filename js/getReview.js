// Write code that returns movie reviews on your movie collection
// Use switch/case instead of if/else

var getReview = function(movie) {
  switch (movie) {
    case 'Toy Story 2':
      return 'Great story. Mean prospector.';
      break;
    case 'Finding Nemo':
      return 'Cool animation and funny turtles.';
      break;
    case 'The Lion King':
      return 'Great songs.';
      break;
    default:
      return "I haven't reviewed this movie yet.";
      break;
  };
};

// getReview('Cinderela');
