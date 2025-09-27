// Heavy animations and gradients loaded separately to avoid blocking FCP
const HeroAnimations = () => {
  return (
    <>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float opacity-40" style={{
        animationDelay: '2s'
      }}></div>
    </>
  );
};

export default HeroAnimations;