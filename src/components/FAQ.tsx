import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <div className="section-padding bg-white border-t border-gray-200">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-display text-center mb-16 text-black">
            faq
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-mono">how does varga.foundation work?</AccordionTrigger>
              <AccordionContent className="font-mono text-gray-600">
                varga.foundation is a universal data platform that runs anywhere. 
                define your pipelines in yaml, deploy with one command, 
                and let the platform handle scaling and monitoring.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-mono">is it really free?</AccordionTrigger>
              <AccordionContent className="font-mono text-gray-600">
                yes. 100% open source under apache 2.0 license. 
                no feature limitations, no usage restrictions. 
                enterprise support available separately.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-mono">what about vendor lock-in?</AccordionTrigger>
              <AccordionContent className="font-mono text-gray-600">
                zero vendor lock-in. runs on kubernetes, docker, or bare metal. 
                deploy on any cloud or on-premises. 
                your data stays under your control.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-mono">how do i get support?</AccordionTrigger>
              <AccordionContent className="font-mono text-gray-600">
                community support via github issues and discord. 
                enterprise customers get 24/7 priority support, 
                professional services, and dedicated channels.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}