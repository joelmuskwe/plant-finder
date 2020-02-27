export interface PlantEntity {
  common_name: string;
  plant_type: string;
  bloom_time: string;
  flower_color: string;
  soil_type?: string;
  habitat_value?: string;
  appropriate_location?: string;
}

export interface PlantForm {
  common_name: string;
  plant_type: string;
  bloom_time: string;
  flower_color: string;
  soil_type: string;
  habitat_value: string;
}
