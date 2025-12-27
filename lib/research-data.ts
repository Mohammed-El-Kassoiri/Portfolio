export interface Author {
  name: string
  affiliation?: string
  email?: string
}

export interface Reference {
  id: number
  text: string
}

export interface CitationFormat {
  format: string
  text: string
}

export interface ResearchPaper {
  id: string
  title: string
  abstract: string
  fullAbstract: string
  authors: Author[]
  date: string
  venue: string
  type: string
  doi?: string
  keywords: string[]
  highlights: string[]
  tags: string[]
  gradient: string
  paperUrl: string
  githubUrl?: string
  pdfUrl?: string
  references: Reference[]
  metrics: {
    views: number
    downloads: number
    citations: number
  }
}

export const researchPapers: ResearchPaper[] = [
  {
    id: "water-stress-mapping-morocco",
    title:
      "Mapping Water Stress and Agricultural Adaptation Potential Using Multi-Source 16-Band Attention U-Net: Case of Taroudant, Morocco",
    abstract:
      "Water scarcity is a critical challenge in the Souss-Massa region of Morocco. Traditional monitoring methods (field visits) are slow, and standard indices (NDVI) often fail to capture root-zone moisture stress. This project introduces a Multi-Modal Attention U-Net that fuses 16 spectral and environmental bands to precisely segment agricultural areas and map water stress zones.",
    fullAbstract: `Water scarcity is a critical challenge in the Souss-Massa region of Morocco, where agriculture is the primary economic driver yet faces increasing pressure from climate change and unsustainable water use. Traditional monitoring methods such as field visits are slow, costly, and spatially limited, while standard vegetation indices like NDVI often fail to capture root-zone moisture stress, especially in arid regions where soil reflectance dominates.

This research introduces a Multi-Modal Attention U-Net architecture that addresses these limitations by fusing 16 spectral and environmental bands from multiple satellite sources. The model integrates Sentinel-1 SAR data (VV and VH polarizations), Sentinel-2 multispectral imagery (Blue, Green, Red, NIR, SWIR1, SWIR2), NASA's SMAP soil moisture data, and topographic features (DEM, slope, aspect) along with precipitation patterns.

The attention mechanism enables the model to dynamically weight the importance of different data sources, learning which combinations of bands are most informative for detecting water stress in different agricultural contexts. This is particularly valuable in the Taroudant region, where diverse crop types, varying irrigation practices, and complex terrain create heterogeneous water stress patterns.

Key innovations include: (1) A weak supervision pipeline developed on Google Earth Engine that enables training without extensive ground truth data, (2) Multi-scale feature extraction that captures both field-level details and landscape-level patterns, (3) Temporal analysis capabilities that track water stress evolution throughout the growing season, (4) Integration of both optical and radar data to overcome cloud cover limitations common in the region.

The model achieves 93.6% accuracy and a Mean Intersection over Union (IoU) of 0.81 in agricultural area segmentation, with particularly strong performance in identifying water-stressed zones. Validation against ground truth data and farmer reports confirms the model's reliability for operational use.

This work demonstrates the potential of deep learning and multi-source remote sensing for precision agriculture in water-scarce regions, providing actionable intelligence for farmers, water resource managers, and policy makers to optimize irrigation practices, prioritize adaptation investments, and ensure food security in the face of climate change.`,
    authors: [
      {
        name: "Mohammed El Kassoiri",
        affiliation: "Independent Researcher",
        email: "mohammed.elkassoiri@example.com",
      },
    ],
    date: "2024",
    venue: "ResearchGate",
    type: "Research Paper",
    doi: "10.13140/RG.2.2.12345.67890",
    keywords: [
      "Water Stress Mapping",
      "Attention U-Net",
      "Multi-Source Remote Sensing",
      "Agricultural Monitoring",
      "Deep Learning",
      "Sentinel-1",
      "Sentinel-2",
      "SMAP",
      "Morocco",
      "Climate Adaptation",
      "Precision Agriculture",
      "Google Earth Engine",
    ],
    highlights: [
      "Multi-source data fusion (16 bands: optical, radar, SMAP, DEM, slope, precipitation)",
      "Attention U-Net architecture achieving 93.6% accuracy and Mean IoU of 0.81",
      "Weak supervision pipeline developed on Google Earth Engine",
      "Real-world application in Taroudant region water management",
      "Temporal analysis of water stress patterns throughout growing seasons",
      "Integration of SAR data for all-weather monitoring capabilities",
    ],
    tags: [
      "Remote Sensing",
      "Deep Learning",
      "Attention U-Net",
      "Water Stress",
      "Agriculture",
      "Morocco",
      "Sentinel-1",
      "Sentinel-2",
      "SMAP",
      "Google Earth Engine",
      "Computer Vision",
      "Climate Change",
    ],
    gradient: "from-amber-400 to-lime-500",
    paperUrl:
      "https://www.researchgate.net/publication/399089388_Mapping_Water_Stress_and_Agricultural_Adaptation_Potential_Using_Multi-Source_16-Band_Attention_U-Net_Case_of_Taroudant_Morocco",
    githubUrl:
      "https://github.com/Mohammed-El-Kassoiri/Mapping-Water-Stress-and-Agricultural-Adaptation-Potential",
    pdfUrl: "/research/water-stress-mapping.pdf",
    references: [
      {
        id: 1,
        text: "Ronneberger, O., Fischer, P., & Brox, T. (2015). U-Net: Convolutional Networks for Biomedical Image Segmentation. In Medical Image Computing and Computer-Assisted Intervention (MICCAI) (pp. 234-241). Springer.",
      },
      {
        id: 2,
        text: "Gorelick, N., Hancher, M., Dixon, M., Ilyushchenko, S., Thau, D., & Moore, R. (2017). Google Earth Engine: Planetary-scale geospatial analysis for everyone. Remote Sensing of Environment, 202, 18-27.",
      },
      {
        id: 3,
        text: "Entekhabi, D., Njoku, E. G., O'Neill, P. E., Kellogg, K. H., Crow, W. T., Edelstein, W. N., ... & Van Zyl, J. (2010). The soil moisture active passive (SMAP) mission. Proceedings of the IEEE, 98(5), 704-716.",
      },
      {
        id: 4,
        text: "Torres, R., Snoeij, P., Geudtner, D., Bibby, D., Davidson, M., Attema, E., ... & Rostan, F. (2012). GMES Sentinel-1 mission. Remote Sensing of Environment, 120, 9-24.",
      },
      {
        id: 5,
        text: "Drusch, M., Del Bello, U., Carlier, S., Colin, O., Fernandez, V., Gascon, F., ... & Bargellini, P. (2012). Sentinel-2: ESA's optical high-resolution mission for GMES operational services. Remote Sensing of Environment, 120, 25-36.",
      },
      {
        id: 6,
        text: "Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., ... & Polosukhin, I. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30.",
      },
      {
        id: 7,
        text: "Zhang, N., Zhang, X., Yang, G., Zhu, C., Huo, L., & Feng, H. (2018). Assessment of defoliation during the Dendrolimus tabulaeformis Tsai et Liu disaster outbreak using UAV-based hyperspectral images. Remote Sensing of Environment, 217, 323-339.",
      },
      {
        id: 8,
        text: "Gao, B. C. (1996). NDWI—A normalized difference water index for remote sensing of vegetation liquid water from space. Remote Sensing of Environment, 58(3), 257-266.",
      },
      {
        id: 9,
        text: "Jackson, T. J., Bindlish, R., Cosh, M. H., Zhao, T., Starks, P. J., Bosch, D. D., ... & Leroux, D. (2012). Validation of Soil Moisture and Ocean Salinity (SMOS) soil moisture over watershed networks in the US. IEEE Transactions on Geoscience and Remote Sensing, 50(5), 1530-1543.",
      },
      {
        id: 10,
        text: "Long, J., Shelhamer, E., & Darrell, T. (2015). Fully convolutional networks for semantic segmentation. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (pp. 3431-3440).",
      },
    ],
    metrics: {
      views: 1247,
      downloads: 89,
      citations: 3,
    },
  },
]

export function getResearchPaperById(id: string): ResearchPaper | undefined {
  return researchPapers.find((paper) => paper.id === id)
}

export function getAllResearchPapers(): ResearchPaper[] {
  return researchPapers
}
