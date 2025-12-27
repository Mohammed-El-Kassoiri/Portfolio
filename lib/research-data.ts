export interface Figure {
  id: string
  src: string
  caption: string
  description?: string
  alt: string
}

export interface Reference {
  id: string
  text: string
  url?: string
}

export interface ResearchPaper {
  id: string
  title: string
  abstract: string
  authors: string
  date: string
  venue: string
  type: string
  gradient: string
  paper: string
  github?: string
  pdf?: string
  figures: Figure[]
  references: Reference[]
}

export const researchPapers: ResearchPaper[] = [
  {
    id: "water-stress-mapping-morocco",
    title:
      "Mapping Water Stress and Agricultural Adaptation Potential Using Multi-Source 16-Band Attention U-Net: Case of Taroudant, Morocco",
    abstract:
      "Water scarcity is a critical challenge in the Souss-Massa region of Morocco, particularly in agricultural areas where traditional monitoring methods such as field visits are time-consuming and resource-intensive. Standard vegetation indices like NDVI often fail to capture the complexity of root-zone moisture stress, which is crucial for effective water management. This research introduces a novel Multi-Modal Attention U-Net architecture that integrates 16 spectral and environmental bands from multiple data sources to achieve precise agricultural land segmentation and water stress mapping. The model fuses optical imagery from Sentinel-2, radar data from Sentinel-1, soil moisture measurements from SMAP, and topographic data including Digital Elevation Models (DEM), slope, and precipitation patterns. By leveraging an attention mechanism, the network learns to focus on the most informative features for water stress detection. A weak supervision pipeline was developed on Google Earth Engine to generate training labels, enabling the model to achieve 93.6% accuracy and a Mean Intersection over Union (IoU) of 0.81 in segmenting agricultural areas and identifying water stress zones. The methodology has been applied to the Taroudant region in Morocco, demonstrating its practical utility for real-world water resource management and agricultural planning. The research contributes to advancing remote sensing techniques for environmental monitoring in water-scarce regions.",
    authors: "Mohammed El Kassoiri",
    date: "2024",
    venue: "ResearchGate",
    type: "Research Paper",
    gradient: "from-amber-400 to-lime-500",
    paper:
      "https://www.researchgate.net/publication/399089388_Mapping_Water_Stress_and_Agricultural_Adaptation_Potential_Using_Multi-Source_16-Band_Attention_U-Net_Case_of_Taroudant_Morocco",
    github:
      "https://github.com/Mohammed-El-Kassoiri/Mapping-Water-Stress-and-Agricultural-Adaptation-Potential",
    pdf: "/research/water-stress-mapping-morocco.pdf",
    figures: [
      {
        id: "fig1",
        src: "/research/figures/study-area.jpg",
        caption: "Figure 1: Study area in Taroudant region, Souss-Massa, Morocco",
        description:
          "Geographic location and extent of the study area showing agricultural lands in the Taroudant region of Morocco. The area is characterized by semi-arid climate and intensive agricultural activities.",
        alt: "Map showing the study area in Taroudant, Morocco with geographic boundaries and key features",
      },
      {
        id: "fig2",
        src: "/research/figures/multi-source-data.jpg",
        caption: "Figure 2: Multi-source remote sensing data integration",
        description:
          "Visualization of the 16-band data fusion approach combining Sentinel-1 radar (VV, VH polarizations), Sentinel-2 optical bands, SMAP soil moisture, DEM, slope, and precipitation data.",
        alt: "Composite image showing different remote sensing data sources used in the study",
      },
      {
        id: "fig3",
        src: "/research/figures/attention-unet-architecture.jpg",
        caption: "Figure 3: Attention U-Net architecture diagram",
        description:
          "Detailed architecture of the Multi-Modal Attention U-Net model showing encoder-decoder structure with skip connections and attention gates that help the network focus on relevant features for water stress detection.",
        alt: "Neural network architecture diagram showing the Attention U-Net structure with attention gates",
      },
      {
        id: "fig4",
        src: "/research/figures/water-stress-map.jpg",
        caption: "Figure 4: Water stress mapping results",
        description:
          "Classified water stress map showing different levels of agricultural water stress across the study area. Color-coded regions indicate varying degrees of water stress from low (green) to severe (red).",
        alt: "Color-coded map showing water stress levels in agricultural areas",
      },
      {
        id: "fig5",
        src: "/research/figures/segmentation-results.jpg",
        caption: "Figure 5: Agricultural land segmentation results",
        description:
          "Comparison of ground truth and model predictions for agricultural land segmentation. The model achieves 93.6% accuracy with Mean IoU of 0.81.",
        alt: "Side-by-side comparison of ground truth and predicted agricultural land segmentation",
      },
      {
        id: "fig6",
        src: "/research/figures/accuracy-metrics.jpg",
        caption: "Figure 6: Model performance metrics and validation results",
        description:
          "Quantitative evaluation showing accuracy, precision, recall, F1-score, and IoU metrics across different validation sets. Confusion matrix and loss curves demonstrate model convergence and reliability.",
        alt: "Charts and graphs showing model performance metrics including accuracy curves and confusion matrix",
      },
    ],
    references: [
      {
        id: "ref1",
        text: "Ronneberger, O., Fischer, P., & Brox, T. (2015). U-Net: Convolutional Networks for Biomedical Image Segmentation. In Medical Image Computing and Computer-Assisted Intervention (MICCAI) (Vol. 9351, pp. 234-241). Springer.",
        url: "https://arxiv.org/abs/1505.04597",
      },
      {
        id: "ref2",
        text: "Oktay, O., Schlemper, J., Folgoc, L. L., Lee, M., Heinrich, M., Misawa, K., ... & Rueckert, D. (2018). Attention U-Net: Learning Where to Look for the Pancreas. arXiv preprint arXiv:1804.03999.",
        url: "https://arxiv.org/abs/1804.03999",
      },
      {
        id: "ref3",
        text: "European Space Agency. (2023). Sentinel-1 SAR Technical Guide. ESA Earth Online.",
        url: "https://sentinels.copernicus.eu/web/sentinel/technical-guides/sentinel-1-sar",
      },
      {
        id: "ref4",
        text: "European Space Agency. (2023). Sentinel-2 MSI Technical Guide. ESA Earth Online.",
        url: "https://sentinels.copernicus.eu/web/sentinel/technical-guides/sentinel-2-msi",
      },
      {
        id: "ref5",
        text: "Entekhabi, D., Njoku, E. G., O'Neill, P. E., Kellogg, K. H., Crow, W. T., Edelstein, W. N., ... & Van Zyl, J. (2010). The Soil Moisture Active Passive (SMAP) Mission. Proceedings of the IEEE, 98(5), 704-716.",
      },
      {
        id: "ref6",
        text: "Gorelick, N., Hancher, M., Dixon, M., Ilyushchenko, S., Thau, D., & Moore, R. (2017). Google Earth Engine: Planetary-scale geospatial analysis for everyone. Remote Sensing of Environment, 202, 18-27.",
        url: "https://www.sciencedirect.com/science/article/pii/S0034425717302900",
      },
      {
        id: "ref7",
        text: "Gao, B. C. (1996). NDWI—A normalized difference water index for remote sensing of vegetation liquid water from space. Remote Sensing of Environment, 58(3), 257-266.",
      },
      {
        id: "ref8",
        text: "Rouse, J. W., Haas, R. H., Schell, J. A., & Deering, D. W. (1974). Monitoring vegetation systems in the Great Plains with ERTS. NASA Special Publication, 351(1974), 309.",
      },
      {
        id: "ref9",
        text: "Ministry of Agriculture, Fisheries, Rural Development, Water and Forests - Morocco. (2020). National Irrigation Water Saving Program 2020-2027.",
      },
      {
        id: "ref10",
        text: "World Bank. (2022). Morocco Country Climate and Development Report. World Bank Group.",
        url: "https://www.worldbank.org/en/country/morocco",
      },
    ],
  },
]

export function getResearchPaperById(id: string): ResearchPaper | undefined {
  return researchPapers.find((paper) => paper.id === id)
}
