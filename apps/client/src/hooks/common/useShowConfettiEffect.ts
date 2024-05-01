import JSConfetti from 'js-confetti';

export const useShowConfettiEffect = () => {
  const jsConfetti = new JSConfetti();

  const showConfettiEffect = () => {
    jsConfetti.addConfetti({
      confettiColors: ['#7046F7', '#8D6BF9', '#A990FA', '#C6B5FC'],
      confettiNumber: 500,
    });
  };

  return { showConfettiEffect };
};
