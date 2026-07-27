export default function Video() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="shimmer-title text-4xl md:text-5xl lg:text-6xl">
            Veja em Ação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça o processo de polimento com nossas esferas e mídias de alta qualidade.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto slide-up">
          <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/eBP6Tc6T-Fg"
              title="Polimento Industrial com Esferas Emtecorp"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video Description */}
        <div className="mt-12 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gray-700 text-lg">
            Veja como nossas esferas e mídias de polimento transformam peças industriais, 
            entregando acabamento de <span className="font-semibold text-primary">precisão profissional</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
