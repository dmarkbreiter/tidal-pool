import { taxa } from '../../taxa'
import Section from './Section';
import Card from './Card';

interface TaxonProps {
  species: string;
  category: string;
  photos?: string[];
  id: string;
  common_name: string;
}

export default function Sections() {
  const t = taxa.filter((taxon: TaxonProps | {}) => Object.keys(taxon).length !== 0);
  const categories = [...new Set(t.map((taxon: any) => taxon.category))];
  return (
    <div className='flex flex-col gap-10 w-full'>
      {categories.map((category: string, i: number) => {
        const taxaInCategory = taxa.filter((taxon: any) => taxon.category === category);
        return (
          <Section title={category} key={i}>
            {taxaInCategory.map((taxon: any, i: number) => (
              <Card key={taxon.id} title={taxon.species} subtitle={taxon.common_name} photos={taxon.photos}/>
            ))}
          </Section>
        );
      })}
    </div>
  )
}