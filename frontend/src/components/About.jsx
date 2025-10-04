const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Introducing Mohsin Ali Khan
          </h2>
          
          <div className=" space-y-3">
            <p className="text-xl md:text-2xl leading-relaxed">
              With a reputation built on trust, dedication, and results, Mohsin Ali Khan is an emerging leader in Perth's real estate market. Backed by a strong background in sales, customer service, and property knowledge, Mohsin has developed a client-first philosophy that places honesty, integrity, and genuine care at the heart of every transaction.
            </p>
            
            <p className="text-xl md:text-2xl leading-relaxed">
              Whether assisting with established properties, first home purchase, a family upgrade or downsize, an investment property, or development opportunities, Mohsin is recognised for his ability to listen, understand, and deliver tailored solutions that align with each client's goals.
            </p>
            
            <p className="text-xl md:text-2xl leading-relaxed">
              In addition to his expertise in real estate sales, Mohsin possesses a valuable understanding of the building and construction sector. This insight allows him to provide clients with informed guidance on:
            </p>
            
             {/* Bullet Points */}
          <ul className="text-xl md:text-2xl leading-relaxed space-y-3 pl-6">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span>Property potential and improvements.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span>Marketability of new builds and renovations.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span>Marketability of new builds and renovations.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></span>
              <span>Working with developers, builders, and investors to maximise returns.</span>
            </li>
          </ul>
            
            <p className="text-xl md:text-2xl leading-relaxed">
              His ability to combine market knowledge with a practical appreciation of construction makes him a trusted advisor for both homeowners and property investors seeking to make confident, well-informed decisions.
            </p>
            
            <p className="text-xl md:text-2xl leading-relaxed">
              Mohsin brings a modern, people-focused approach to real estate leveraging innovative marketing strategies, strong negotiation skills, and clear communication to create campaigns that connect with buyers and achieve premium results. His approachable nature, transparency, and attention to detail ensure that the sales process remains as smooth and stress-free as possible for every client.
            </p>
            
            <p className="text-xl md:text-2xl leading-relaxed">
              When you appoint Mohsin, you gain more than a sales consultant—you gain a dedicated partner who goes the extra mile from the very first conversation through to final settlement. He prides himself on building long-term relationships founded on service excellence, open communication, and trust.
            </p>
            
            <p className="text-xl md:text-2xl leading-relaxed">
              Above all, Mohsin treats every client's property with the same care as his own, working tirelessly to secure the right outcome. For those seeking clear guidance, tailored marketing, strong industry knowledge, and a trusted advocate by their side, Mohsin Ali Khan is the professional you can count on in Perth's competitive property market.
            </p>
          </div>
        </div>
    </section>
  );
};

export default About;
