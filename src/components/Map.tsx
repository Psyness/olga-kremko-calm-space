import React from 'react';

const Map = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-foreground">
              Как меня найти
            </h2>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.1!2d27.4685!3d53.8843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc5b2b2c8f65d%3A0x5c2b8b9a8b9a8b9a!2z0YPQuy4g0KPQsdC-0YDQtdCy0LjRh9CwIDk10JAsINCc0LjQvdGB0YA!5e0!3m2!1sru!2sby!4v1234567890123!5m2!1sru!2sby"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта офиса"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;