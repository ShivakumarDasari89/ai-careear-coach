import HeroSection from "../components/hero";
import { features } from "@/data/features";
import { Card, CardContent } from "@/components/ui/card";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import Image from "next/image";
import { faqs } from "@/data/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div >
<HeroSection />
<section className="w-full py-12 md:py-24 lg:py-32 bg-background">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Powerful Features for Your Career Growth</h2>
    <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {
        features.map((feature,index) => {
          return (
            <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
            <CardContent className="pt-6 text-center flex flex-col items-center">
              <div className="flex flex-col items-center justify-center">
                {feature.icon}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>

              </div>
            </CardContent>
        </Card>
          )})

      }
    </div>
  </div>
</section>
<section className="w-full py-12 md:py-24  bg-muted bg-opacity-50">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h3 className="text-4xl font-bold ">50+</h3>
        <p className="text-muted-foreground text-center">Industries Covered</p>
      </div>  
            <div className="flex flex-col items-center justify-center space-y-2">
        <h3 className="text-4xl font-bold ">1000+</h3>
        <p className="text-muted-foreground text-center">Interview Quetions</p>
      </div>
            <div className="flex flex-col items-center justify-center space-y-2">
        <h3 className="text-4xl font-bold ">95%</h3>
        <p className="text-muted-foreground text-center">Success Rate</p>
      </div>
            <div className="flex flex-col items-center justify-center space-y-2">
        <h3 className="text-4xl font-bold ">24/7</h3>
        <p className="text-muted-foreground text-center">AI Support</p>
      </div>

    </div>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 bg-background">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">How It Works</h2>
    <p className="text-muted-foreground">Four simple steps to accelarate your career growth</p>
    </div>
    <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {
        howItWorks.map((item,index) => {
          return (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-muted bg-opacity-50 flex items-center justify-center">{item.icon}</div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
            
          )})

      }
    </div>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 bg-muted bg-opacity-50">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">what Our Users Sayes</h2>
    <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {
        testimonial.map((testmonial,index) => {
          return (
            <Card key={index} className="bg-background border-2 hover:border-primary transition-colors duration-300">
            <CardContent className="pt-6 ">
              <div  className="  space-y-4">
                <div className="flex items-center space-x-4">
                  <div  className="  relative h-12 w-12 flex-shrink-0">
                    <Image src={testmonial.image} alt={testmonial.author} width={40} height={40} className="rounded-full object-cover border-2 border-primary border-opacity-20"/></div>
                   <div className="flex flex-col">
                    <p className="font-semibold">{testmonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testmonial.role}</p>
                    <p className="text-sm text-primary">{testmonial.company}</p>
                   </div>
                  </div>
                  <blockquote className="mt-4 italic text-sm text-muted-foreground">"{testmonial.quote}"</blockquote>
                </div>
            </CardContent>
        </Card>
          )})

      }
    </div>
  </div>
</section>


<section className="w-full py-12 md:py-24 lg:py-32 bg-background">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Frequently Asked Quetions</h2>
    <p className="text-muted-foreground">Find answers to most common quetions about our platform</p>
    </div>
    <div className="max-w-6xl mx-auto">
      <Accordion type="single" collapsible className="w-full">

      {
        faqs.map((item,index) => {
          return (
            <AccordionItem key={index} value={`item-${index}`} className="border-b">
            <AccordionTrigger className="py-4 text-left w-full flex justify-between items-center">
              <span className="font-medium">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        )
      })
    }
      </Accordion>

    </div>
  </div>
</section>



<section className="w-full ">
  <div className=" mx-auto py-24 gradient rounded-lg px-4 ">
    <div className="flex flex-col items-center justify-center space-y-4 max-w-3xl mx-auto text-center">
    <h2 className="text-3xl foun-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">Ready to Accelaerate your Career</h2>
    <p className="mx-auto max-w-[600px] text-primary-foreground text-opacity-80 md:text-xl ">Join thousands of professionals who are their careers with AI-powered guidnace.</p>
    <Link href='/dashboard' passHref>
      <Button size="lg" variant='secondary' className="h-l1 mt-5 animate-bounce">Start Your Journet Today 
        <ArrowRight className="ml-2 h-4 w-4"/>
      </Button>
    </Link>
    </div>
  </div>
</section>


</div>
);
}
