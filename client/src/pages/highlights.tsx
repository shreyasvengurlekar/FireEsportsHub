import { Card, CardContent } from "@/components/ui/card";

export default function Highlights() {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-gaming font-black text-4xl md:text-6xl text-primary mb-8">
          Tournament Highlights
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Relive the most epic moments from our past tournaments! Watch the best plays, clutch moments, and more.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-4">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/-Sf8yt8JbnE"
                  title="Free Fire Highlights 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 rounded-lg"
                ></iframe>
              </div>
              <div className="mt-4 font-bold">Free Fire Highlights 1</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/e2mNfbBtjU4"
                  title="Free Fire Highlights 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 rounded-lg"
                ></iframe>
              </div>
              <div className="mt-4 font-bold">Free Fire Highlights 2</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
