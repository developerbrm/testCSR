const animationObserver = () => {
  //Intersection observer for animations-----------------------------------------------------------
  let optionsForAnimations = {
    // threshold: 0.2,
  };

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const {
        delay,
        animname,
        onetime,
        animtiming,
        timingfunction,
      } = entry.target.dataset;

      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `${animname} ${animtiming || 0.5}s ${
          timingfunction || `ease`
        } ${delay || 0}s forwards`;
      } else if (onetime) return;
      else {
        entry.target.style.animation = `none`;
      }
    });
  }, optionsForAnimations);

  const prepareAnimation = (element) => {
    const { animname } = element.dataset;
    element.classList.add(animname);
  };

  const selectors = [`[data-animname]`];

  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      if (!element) return;

      prepareAnimation(element);
      animationObserver.observe(element);
    });
  });
};

export default animationObserver;
