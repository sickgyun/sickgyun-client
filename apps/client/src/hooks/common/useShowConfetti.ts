import JSConfetti from 'js-confetti';

export const useShowConfetti = () => {
  const jsConfetti = new JSConfetti();

  const showConfetti = () => {
    jsConfetti.addConfetti({
      confettiColors: ['#7046F7', '#8D6BF9', '#A990FA', '#C6B5FC'],
      confettiNumber: 500,
    });
  };

  return { showConfetti };
};
