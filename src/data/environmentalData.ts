import type { EnvironmentalIssue, StatisticItem, Solution, TimelineEvent, ComparisonItem } from '../types/environmentalData';

// Estatísticas gerais sobre desmatamento e meio ambiente
export const generalStatistics: StatisticItem[] = [
  {
    id: 1,
    title: 'Desmatamento na Amazônia',
    value: '10.781 km²',
    description: 'Área desmatada na Amazônia brasileira em 2021, segundo o INPE.',
    color: '#C75643'
  },
  {
    id: 2,
    title: 'Emissões de GEE',
    value: '73%',
    description: 'Percentual das emissões de gases de efeito estufa no Brasil provenientes da agropecuária e mudanças no uso da terra.',
    color: '#F0A202'
  },
  {
    id: 3,
    title: 'Consumo de Água',
    value: '15.000 L',
    description: 'Quantidade de água necessária para produzir 1kg de carne bovina.',
    color: '#3A6EA5'
  },
  {
    id: 4,
    title: 'Aquecimento dos Oceanos',
    value: '90%',
    description: 'Percentual do calor do aquecimento global absorvido pelos oceanos.',
    color: '#4A8B41'
  },
];

// Dados detalhados sobre questões ambientais
export const environmentalIssues: EnvironmentalIssue[] = [
  {
    id: 1,
    title: 'Desmatamento para Pecuária',
    description: 'A pecuária é a principal causa do desmatamento na Amazônia brasileira. A expansão das áreas de pastagem para criação de gado é responsável por cerca de 80% do desmatamento na região. O Brasil possui o maior rebanho comercial do mundo, com mais de 200 milhões de cabeças de gado, e é o maior exportador mundial de carne bovina.',
    imageUrl: '/images/deforestation-cattle.jpg',
    statistics: [
      {
        id: 1,
        title: 'Área de Pastagem',
        value: '80%',
        description: 'Percentual do desmatamento na Amazônia destinado à criação de gado.',
      },
      {
        id: 2,
        title: 'Rebanho Bovino',
        value: '200+ milhões',
        description: 'Número de cabeças de gado no Brasil, o maior rebanho comercial do mundo.',
      },
      {
        id: 3,
        title: 'Exportação',
        value: '1º lugar',
        description: 'Posição do Brasil no ranking mundial de exportação de carne bovina.',
      },
    ],
    chartData: {
      labels: ['Pecuária', 'Agricultura', 'Mineração', 'Urbanização', 'Outros'],
      datasets: [{
        label: 'Causas do Desmatamento na Amazônia (%)',
        data: [80, 10, 3, 2, 5],
        backgroundColor: [
          '#C75643',
          '#F0A202',
          '#8CC084',
          '#3A6EA5',
          '#888888'
        ],
      }]
    },
    sources: [
      'INPE - Instituto Nacional de Pesquisas Espaciais',
      'MapBiomas',
      'Observatório do Clima',
    ]
  },
  {
    id: 2,
    title: 'Produção de Soja',
    description: 'O Brasil é o maior produtor de soja do mundo ( e terceiro maior produtor de milho, atrás apenas dos Estados Unidos e da China ). Grande parte da produção de soja no país é destinada à alimentação animal, principalmente para a criação de aves e suínos. Globalmente, cerca de 83% das terras agrícolas são usadas para a criação de animais e cultivo de ração, enquanto fornecem apenas 18% das calorias consumidas pelos humanos.',
    imageUrl: '/images/soy-production.jpg',
    statistics: [
      {
        id: 1,
        title: 'Destino da Soja',
        value: '77%',
        description: 'Percentual da soja mundial destinada à alimentação animal.',
      },
      {
        id: 2,
        title: 'Consumo de Milho',
        value: '70-80%',
        description: 'Percentual do milho brasileiro destinado à alimentação animal.',
      },
      {
        id: 3,
        title: 'Terras Agrícolas',
        value: '83%',
        description: 'Percentual das terras agrícolas globais usadas para criação animal e cultivo de ração.',
      },
    ],
    chartData: {
      labels: ['Alimentação Animal', 'Consumo Humano Direto', 'Biocombustíveis', 'Outros'],
      datasets: [{
        label: 'Destino da Produção de Soja (%)',
        data: [77, 13, 7, 3],
        backgroundColor: [
          '#F0A202',
          '#4A8B41',
          '#3A6EA5',
          '#888888'
        ],
      }]
    },
    sources: [
      'EMBRAPA - Empresa Brasileira de Pesquisa Agropecuária',
      'FAO - Organização das Nações Unidas para Alimentação e Agricultura',
      'Our World in Data',
    ]
  },
  {
    id: 3,
    title: 'Consumo de Água na Indústria Pecuária',
    description: 'A atividade agropecuária responde por 92% da pegada hídrica global, com a produção de carne bovina sendo especialmente intensiva em água. São necessários aproximadamente 15.000 litros de água para produzir 1kg de carne bovina, enquanto alimentos de origem vegetal geralmente requerem muito menos água. A irrigação para produção de alimentos para animais também consome 72% da água doce do planeta.',
    imageUrl: '/images/water-consumption.jpg',
    statistics: [
      {
        id: 1,
        title: 'Pegada Hídrica',
        value: '92%',
        description: 'Percentual da pegada hídrica global atribuída à agropecuária.',
      },
      {
        id: 2,
        title: 'Água para Carne Bovina',
        value: '15.000 L/kg',
        description: 'Volume de água necessário para produzir 1kg de carne bovina.',
      },
      {
        id: 3,
        title: 'Água para Arroz',
        value: '2.500 L/kg',
        description: 'Volume de água necessário para produzir 1kg de arroz.',
      },
      {
        id: 4,
        title: 'Irrigação',
        value: '72%',
        description: 'Percentual da água doce do planeta usada para irrigação.',
      },
    ],
    chartData: {
      labels: ['Carne Bovina', 'Carne Suína', 'Frango', 'Arroz', 'Feijão', 'Batata'],
      datasets: [{
        label: 'Consumo de Água por Alimento (L/kg)',
        data: [15000, 6000, 4300, 2500, 4000, 290],
        backgroundColor: '#3A6EA5',
      }]
    },
    sources: [
      'Water Footprint Network',
      'FAO - Organização das Nações Unidas para Alimentação e Agricultura',
      'UNESCO - Organização das Nações Unidas para a Educação, a Ciência e a Cultura',
    ]
  },
  {
    id: 4,
    title: 'Aquecimento dos Oceanos',
    description: 'Os oceanos absorvem cerca de 90% do calor adicional gerado pelo aquecimento global e aproximadamente um terço das emissões de CO2. Isso resulta no aumento da temperatura dos oceanos, acidificação e redução dos níveis de oxigênio, ameaçando ecossistemas marinhos como os recifes de coral. O aquecimento dos oceanos também contribui para eventos climáticos extremos, como furacões mais intensos e frequentes.',
    imageUrl: '/images/ocean-warming.jpg',
    statistics: [
      {
        id: 1,
        title: 'Absorção de Calor',
        value: '90%',
        description: 'Percentual do calor do aquecimento global absorvido pelos oceanos.',
      },
      {
        id: 2,
        title: 'Absorção de CO2',
        value: '30%',
        description: 'Percentual das emissões de CO2 absorvidas pelos oceanos.',
      },
      {
        id: 3,
        title: 'Recifes de Coral',
        value: '70-90%',
        description: 'Percentual de recifes de coral ameaçados de desaparecer até 2050 devido ao aquecimento dos oceanos.',
      },
      {
        id: 4,
        title: 'Aumento do Nível do Mar',
        value: '3,6 mm/ano',
        description: 'Taxa atual de elevação do nível do mar devido ao derretimento das geleiras e expansão térmica da água.',
      },
    ],
    chartData: {
      labels: ['1900', '1920', '1940', '1960', '1980', '2000', '2020'],
      datasets: [{
        label: 'Anomalia da Temperatura dos Oceanos (°C)',
        data: [-0.2, -0.1, 0, 0.1, 0.2, 0.5, 0.8],
        borderColor: '#3A6EA5',
        backgroundColor: 'rgba(58, 110, 165, 0.2)',
        borderWidth: 2,
      }]
    },
    sources: [
      'IPCC - Painel Intergovernamental sobre Mudanças Climáticas',
      'NOAA - Administração Nacional Oceânica e Atmosférica',
      'NASA - Administração Nacional da Aeronáutica e Espaço',
    ]
  },
];

// Dados sobre soluções para os problemas ambientais
export const environmentalSolutions: Solution[] = [
  {
    id: 1,
    title: 'Eliminação do Consumo de Carnes',
    description: 'Abandonar completamente o consumo de carnes é essencial para reduzir drasticamente a pressão sobre florestas, o uso de água e as emissões de gases de efeito estufa. Adotar uma dieta 100% baseada em vegetais representa uma das mudanças mais impactantes que um indivíduo pode fazer para diminuir sua pegada ambiental. Precisamos de mudanças drásticas e imediatas para salvar nosso planeta.',
    imageUrl: '/images/plant-based-diet.jpg',
    category: 'individual',
    impact: 'high',
  },
  {
    id: 2,
    title: 'Políticas de Desmatamento Zero',
    description: 'Implementação e fiscalização rigorosa de políticas que proíbam o desmatamento para expansão agropecuária, mineração e outros fins. Isso inclui o fortalecimento de órgãos de fiscalização ambiental e o uso de tecnologias de monitoramento por satélite.',
    imageUrl: '/images/zero-deforestation.jpg',
    category: 'policy',
    impact: 'high',
  },
  {
    id: 3,
    title: 'Agricultura Regenerativa',
    description: 'Práticas agrícolas que restauram a saúde do solo, aumentam a biodiversidade e sequestram carbono, como rotação de culturas, plantio direto, compostagem e integração lavoura-pecuária-floresta. Essas técnicas podem aumentar a produtividade sem expandir a área cultivada.',
    imageUrl: '/images/regenerative-agriculture.jpg',
    category: 'technology',
    impact: 'high',
  },
  {
    id: 4,
    title: 'Proteção de Áreas Marinhas',
    description: 'Criação e manutenção de áreas marinhas protegidas, que ajudam a preservar ecossistemas oceânicos, restaurar populações de peixes e aumentar a resiliência dos oceanos às mudanças climáticas. Implementação de projetos governamentais de "esgoto zero e plástico zero" ao oceano, fundamentais para a preservação da vida marinha e qualidade das águas.',
    imageUrl: '/images/marine-protection.jpg',
    category: 'conservation',
    impact: 'medium',
  },
  {
    id: 5,
    title: 'Tecnologias de Economia de Água',
    description: 'Implementação de sistemas de irrigação eficientes, como gotejamento, e tecnologias de reuso de água na agricultura e indústria para reduzir o consumo de água doce.',
    imageUrl: '/images/water-saving-tech.jpg',
    category: 'technology',
    impact: 'medium',
  },
  {
    id: 6,
    title: 'Consumo Consciente',
    description: 'Escolha exclusiva de produtos com certificação ambiental, provenientes de empresas comprometidas com boas práticas ambientais, respeito aos seres vivos e condições dignas de trabalho. Priorização de marcas que não estejam envolvidas com trabalho escravo, exploração humana ou degradação ambiental, garantindo um impacto positivo em toda a cadeia produtiva.',
    imageUrl: '/images/conscious-consumption.jpg',
    category: 'individual',
    impact: 'medium',
  },
];

// Dados para comparações de impacto ambiental
export const environmentalComparisons: ComparisonItem[] = [
  {
    id: 1,
    title: 'Consumo de Água na Produção de Alimentos',
    category: 'water',
    value1: 15000,
    label1: 'Carne Bovina',
    value2: 290,
    label2: 'Batata',
    unit: 'litros/kg',
    description: 'A produção de 1kg de carne bovina requer aproximadamente 50 vezes mais água do que a produção de 1kg de batata.',
  },
  {
    id: 2,
    title: 'Emissões de Gases de Efeito Estufa',
    category: 'emissions',
    value1: 60,
    label1: 'Carne Bovina',
    value2: 0.4,
    label2: 'Legumes',
    unit: 'kg CO2eq/kg',
    description: 'A produção de 1kg de carne bovina emite cerca de 150 vezes mais gases de efeito estufa do que 1kg de legumes.',
  },
  {
    id: 3,
    title: 'Uso da Terra',
    category: 'land',
    value1: 83,
    label1: 'Criação Animal e Ração',
    value2: 18,
    label2: 'Calorias Humanas Produzidas',
    unit: '%',
    description: '83% das terras agrícolas globais são usadas para criação de animais e cultivo de ração, mas fornecem apenas 18% das calorias consumidas pelos humanos.',
  },
  {
    id: 4,
    title: 'Desmatamento na Amazônia',
    category: 'deforestation',
    value1: 80,
    label1: 'Pecuária',
    value2: 10,
    label2: 'Agricultura',
    unit: '%',
    description: 'A pecuária é responsável por 80% do desmatamento na Amazônia brasileira, enquanto a agricultura responde por cerca de 10%.',
  },
];

// Eventos históricos relacionados ao meio ambiente
export const environmentalTimeline: TimelineEvent[] = [
  {
    id: 1,
    year: 1970,
    title: 'Primeiro Dia da Terra',
    description: 'Celebração do primeiro Dia da Terra, marcando o início do movimento ambiental moderno.',
    category: 'policy',
  },
  {
    id: 2,
    year: 1992,
    title: 'ECO-92',
    description: 'Conferência das Nações Unidas sobre o Meio Ambiente e o Desenvolvimento, realizada no Rio de Janeiro, que estabeleceu a Agenda 21 e a Convenção-Quadro das Nações Unidas sobre Mudança do Clima.',
    category: 'policy',
  },
  {
    id: 3,
    year: 2004,
    title: 'Pico do Desmatamento na Amazônia',
    description: 'A Amazônia brasileira registrou o maior índice de desmatamento da história, com mais de 27.000 km² desmatados em um único ano. Em 2013, dez anos após o pico, o desmatamento foi mais de três vezes menor, equivalente a "apenas" 370 campos de futebol por dia.',
    category: 'deforestation',
  },
  {
    id: 4,
    year: 2015,
    title: 'Acordo de Paris',
    description: 'Acordo global para combater as mudanças climáticas, com o objetivo de limitar o aquecimento global a bem abaixo de 2°C acima dos níveis pré-industriais.',
    category: 'policy',
  },
  {
    id: 5,
    year: 2019,
    title: 'Aumento do Desmatamento',
    description: 'Após anos de queda, o desmatamento na Amazônia brasileira voltou a crescer significativamente, com um aumento de 34% em relação ao ano anterior.',
    category: 'deforestation',
  },
  {
    id: 6,
    year: 2020,
    title: 'Recordes de Temperatura nos Oceanos',
    description: 'Os oceanos registraram as temperaturas mais altas já medidas, com impactos severos em recifes de coral e outros ecossistemas marinhos.',
    category: 'ocean',
  },
];