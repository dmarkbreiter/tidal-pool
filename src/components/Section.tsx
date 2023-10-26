import { H2 } from "./Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
}

export default function Section({ children, title }: SectionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={title}>
        <AccordionTrigger>
         {title && <H2>{title}</H2>}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 w-full">
          <div className="flex flex-wrap gap-6">{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
