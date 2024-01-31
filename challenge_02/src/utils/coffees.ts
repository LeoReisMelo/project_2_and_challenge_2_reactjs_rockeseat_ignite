import Expresso from '../assets/coffees/expresso.svg'
import Americano from '../assets/coffees/americano.svg'
import Cremoso from '../assets/coffees/cremoso.svg'
import Gelado from '../assets/coffees/gelado.svg'
import ComLeite from '../assets/coffees/comLeite.svg'
import Latte from '../assets/coffees/latte.svg'
import Capuccino from '../assets/coffees/capuccino.svg'
import Macchiato from '../assets/coffees/macchiato.svg'
import Mochaccino from '../assets/coffees/mochaccino.svg'
import Chocolate from '../assets/coffees/chocolate.svg'
import Cubano from '../assets/coffees/cubano.svg'
import Havaiano from '../assets/coffees/havaiano.svg'
import Arabe from '../assets/coffees/arabe.svg'
import Irlandes from '../assets/coffees/irlandes.svg'

export const coffees = [
    {
        id: 1,
        image: `${Expresso}`,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        value: '9,90',
        tags: ['TRADICIONAL']
    },
    {
        id: 2,
        image:  `${Americano}`,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        value: '9,90',
        tags: ['TRADICIONAL']
    },
    {
        id: 3,
        image: `${Cremoso}`,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        value: '9,90',
        tags: ['TRADICIONAL']
    },
    {
        id: 4,
        image: `${Gelado}`,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        value: '9,90',
        tags: ['TRADICIONAL', 'GELADO']
    },
    {
        id: 5,
        image: `${ComLeite}`,
        name: 'Café com leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        value: '9,90',
        tags: ['TRADICIONAL', 'COM LEITE']
    },
    {
        id: 6,
        image: `${Latte}`,
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro do leite e espuma cremosa',
        value: '9,90',
        tags: ['TRADICIONAL', 'COM LEITE']
    },
    {
        id: 7,
        image: `${Capuccino}`,
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        value: '9,90',
        tags: ['TRADICIONAL', 'COM LEITE']
    },
    {
        id: 8,
        image: `${Macchiato}`,
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        value: '9,90',
        tags: ['TRADICIONAL', 'COM LEITE']
    },
    {
        id: 9,
        image: `${Mochaccino}`,
        name: 'Mochaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        value: '9,90',
        tags: ['TRADICIONAL', 'COM LEITE']
    },
    {
        id: 10,
        image: `${Chocolate}`,
        name: 'Chocolate quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        value: '9,90',
        tags: ['ESPECIAL', 'COM LEITE']
    },
    {
        id: 11,
        image: `${Cubano}`,
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        value: '9,90',
        tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO']
    },
    {
        id: 12,
        image: `${Havaiano}`,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        value: '9,90',
        tags: ['ESPECIAL']
    },
    {
        id: 13,
        image: `${Arabe}`,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        value: '9,90',
        tags: ['ESPECIAL']
    },
    {
        id: 14,
        image: `${Irlandes}`,
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açucar e chantilly',
        value: '9,90',
        tags: ['ESPECIAL', 'ALCOÓLICO']
    }
]