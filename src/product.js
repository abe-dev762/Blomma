import ficusTineke from './assets/ficus-tineke.jpg'
import fiddleLeaf from './assets/fiddle-leaf.jpg'
import goldenPothos from './assets/golden-pothos.jpg'
import rubyRubber from './assets/ruby-rubber.jpg'
import peaceLily from './assets/peace-lily.jpg'
import splitLeaf from './assets/split-leaf.jpg'
import zzPlant from './assets/zz-plant.jpg'

export const products = [
        {
            category: "Air Purifying Plants",
            product: [
                {
                    id: 1,
                    name: "Fiddle Leaf Fig Tree",
                    image: fiddleLeaf,
                    description: "Fiddle Leaf Fig Tree (Ficus Lyrata)' is a gorgeous plant known for their large leaves and vibrant green colors.",
                    price: "$40",
                    slug: "Fiddle-Leaf-Fig-Tree",
                },
                {
                    id: 2,
                    name: "Golden Pothos Plant",
                    image: goldenPothos,
                    description: "The Golden Pothos is one of the world's best-selling plants and for a good reason! They are impossible to kill, hence their nickname, Devil's Ivy.",
                    price: "$43",
                    slug: "Golden-Pothos-Plant",
                },
                {
                    id: 3,
                    name: "Ruby Rubber Plant",
                    image: rubyRubber,
                    description: "Enhance your space with the Ruby Rubber Tree (Ficus elastica 'Ruby'), a versatile indoor tree perfect for beginners and experienced plant lovers.",
                    price: "$50",
                    slug: "Ruby-Rubber-Plant",
                },
            ]
        },
     {
        category: "Office Plants",
        product: [
            {
                id: 4,
                name: "ZZ plant",
                image: zzPlant,
                description: "The ZZ plant is an excellent low-maintenance indoor plant, known as Zamioculcas Zamiifolia.",
                price: "$43",
                slug: "ZZ-plant",
            },
            {
                id: 5,
                name: "Peace Lily",
                image: peaceLily,
                description: "This beautiful Peace Lily (Spathiphyllum) will bring elegance to any space.",
                price: "$42",
                slug: "Peace-Lily",
            },
            {
                id: 6,
                name: "Finus Tineke Plant",
                image: ficusTineke,
                description: "The Too Beautiful Ficus Tineke Rubber Trees are easy for beginners and a great starter plant!",
                price: "$57",
                slug: "Finus-Tineke-Plant",
            },
        ]
     },
    ];
