import { Calculator, HardHat, Hammer, Paintbrush, Ruler, Zap, Truck, Shovel } from 'lucide-react';

export const services = [
    {
        id: 'construction-takeoff',
        title: 'Construction Takeoff Services',
        description: 'Accurate material takeoffs for contractors and builders.',
        icon: Calculator,
        path: '/services/construction-takeoff',
        content: {
            headline: 'Precision Construction Takeoffs for Florida Contractors',
            intro: 'Our construction takeoff services provide the detailed material quantities you need to build accurate bids. We measure everything from the foundation to the roof, ensuring nothing is missed.',
            benefits: ['Eliminate guesswork', 'Reduce material waste', 'Save hours of calculation time'],
            process: 'We import your digital plans into PlanSwift, scale them accurately, and trace every element. We then export the data into a clean Excel spreadsheet organized by CSI division.',
        }
    },
    {
        id: 'residential-estimating',
        title: 'Residential Estimating',
        description: 'Detailed estimates for single-family homes and multi-family units.',
        icon: HardHat,
        path: '/services/residential-estimating',
        content: {
            headline: 'Reliable Residential Estimates for Custom Homes & Remodels',
            intro: 'Whether you are building a custom home in Naples or a multi-family complex in Orlando, our residential estimating team delivers fast and accurate cost projections.',
            benefits: ['Detailed labor & material breakdown', 'Local Florida pricing database', 'Fast 24-48 hour turnaround'],
            process: 'We review your architectural and structural drawings, quantifying all framing, concrete, finishes, and MEPs to give you a complete picture of the project cost.',
        }
    },
    {
        id: 'commercial-estimating',
        title: 'Commercial Estimating',
        description: 'Comprehensive cost estimation for office buildings, retail, and more.',
        icon: Ruler,
        path: '/services/commercial-estimating',
        content: {
            headline: 'Commercial Estimating for Retail, Office & Mixed-Use',
            intro: 'Commercial projects require a higher level of detail and compliance. Our team has experience estimating banks, retail build-outs, and office complexes across Florida.',
            benefits: ['CSI MasterFormat reporting', 'Assistance with change orders', 'Value engineering suggestions'],
            process: 'We analyze the full set of construction documents, including specs, to ensure every requirement is met in the estimate.',
        }
    },
    {
        id: 'industrial-estimating',
        title: 'Industrial Estimating',
        description: 'Heavy industrial project estimation including warehouses and factories.',
        icon: Truck,
        path: '/services/industrial-estimating',
        content: {
            headline: 'Heavy Industrial & Warehouse Estimating',
            intro: 'From large distribution centers to manufacturing plants, we handle the complexities of industrial construction estimating.',
            benefits: ['Steel & concrete focus', 'MEP coordination', 'Large scale quantity verification'],
            process: 'We focus on the major cost drivers in industrial projects: earthwork, concrete, and structural steel.',
        }
    },
    {
        id: 'mep-estimating',
        title: 'MEP Estimating',
        description: 'Mechanical, Electrical, and Plumbing integrated estimates.',
        icon: Zap,
        path: '/services/mep-estimating',
        content: {
            headline: 'Integrated MEP Estimating Services',
            intro: 'Mechanical, Electrical, and Plumbing systems often make up 30-40% of a project\'s cost. Our specialized MEP estimators ensure accuracy in these critical trades.',
            benefits: ['Ductwork & piping lengths', 'Fixture counts', 'Switchgear & panel pricing'],
            process: 'We count every fixture, outlet, and linear foot of pipe/duct to provide a granular bill of materials.',
        }
    },
];

export const trades = [
    {
        id: 'concrete',
        title: 'Concrete Estimating',
        path: '/trades/concrete',
        icon: HardHat,
        content: {
            headline: 'Concrete Quantity Takeoffs',
            intro: 'Accurate calculations for slabs, footings, CMU blocks, and rebar. We help concrete contractors order exactly what they need.',
            deliverables: ['Cubic yards of concrete (3000psi, etc.)', 'Rebar tonnage & mesh', 'Vapor barrier & wire mesh'],
        }
    },
    {
        id: 'masonry',
        title: 'Masonry Estimating',
        path: '/trades/masonry',
        icon: Hammer,
        content: {
            headline: 'Masonry & Stucco Estimating',
            intro: 'We calculate CMU block counts, brick veneer, mortar, grout, and stucco yardage for Florida structures.',
            deliverables: ['Block count (8x8x16, etc.)', 'Mortar & Grout cubic yards', 'Lintels & bond beams'],
        }
    },
    {
        id: 'sitework',
        title: 'Sitework & Earthwork',
        path: '/trades/sitework',
        icon: Shovel,
        content: {
            headline: 'Earthwork & Utilities Takeoff',
            intro: 'Cut and fill analysis, grading, and underground utility pipes. We use advanced software to visualize terrain.',
            deliverables: ['Cut/Fill volumes', 'Pipe lengths (storm/sanitary)', 'Import/Export quantities'],
        }
    },
    {
        id: 'steel',
        title: 'Steel Estimating',
        path: '/trades/steel',
        icon: Ruler,
        content: {
            headline: 'Structural Steel Estimating',
            intro: 'Beams, columns, trusses, and decking. We provide weight and piece counts for fabricators and erectors.',
            deliverables: ['Steel tonnage', 'Bolt & connection counts', 'Decking square footage'],
        }
    },
    {
        id: 'drywall',
        title: 'Drywall & Finishing',
        path: '/trades/drywall',
        icon: Paintbrush,
        content: {
            headline: 'Drywall & Metal Frame Estimating',
            intro: 'Stud lists, gypsum board sheets, taping, Mud, and insulation. Perfect for interior systems contractors.',
            deliverables: ['Sheet counts (5/8", 1/2")', 'Metal stud lengths & gauge', 'Insulation square footage'],
        }
    },
    {
        id: 'painting',
        title: 'Painting Estimating',
        path: '/trades/painting',
        icon: Paintbrush,
        content: {
            headline: 'Painting & Coatings Takeoff',
            intro: 'Wall and ceiling square footage calculations minus openings. Exterior and interior paint quantities.',
            deliverables: ['Paint gallons needed', 'Primer quantities', 'Wall covering areas'],
        }
    },
    {
        id: 'roofing',
        title: 'Roofing Estimating',
        path: '/trades/roofing',
        icon: HardHat,
        content: {
            headline: 'Roofing Material Takeoff',
            intro: 'Shingles, tile, metal, or TPO. We calculate squares, waste factor, and flashing details.',
            deliverables: ['Roof squares (100 sq ft)', 'Underlayment rolls', 'Linear feet of flashing/ridge'],
        }
    },
    {
        id: 'flooring',
        title: 'Flooring Estimating',
        path: '/trades/flooring',
        icon: Ruler,
        content: {
            headline: 'Floor Covering Estimates',
            intro: 'Tile, carpet, hardwood, and vinyl. We optimize layout to minimize waste.',
            deliverables: ['Tile square footage', 'Grout & thinset', 'Carpet square yards'],
        }
    },
    {
        id: 'landscaping',
        title: 'Landscaping Estimating',
        path: '/trades/landscaping',
        icon: Shovel,
        content: {
            headline: 'Landscaping & Hardscape',
            intro: 'Plant counts, sod area, mulch, and irrigation piping.',
            deliverables: ['Plant/Tree list', 'Sod pallets/sq ft', 'Irrigation zones'],
        }
    },
    {
        id: 'carpentry',
        title: 'Carpentry & Framing',
        path: '/trades/carpentry',
        icon: Hammer,
        content: {
            headline: 'Wood Framing & Trim',
            intro: 'Lumber packages for residential framing. Studs, headers, joists, and rafters.',
            deliverables: ['Lumber board feet', 'Sheathing sheets', 'Trim linear footage'],
        }
    },
];
