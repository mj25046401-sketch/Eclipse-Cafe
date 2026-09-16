export interface MenuItem {
  id: string;
  name: string;
  category: 'functional' | 'traditional' | 'bakery' | 'paninis';
  price: number;
  description: string;
  image: string;
  adaptogens?: string[];
  dietary?: string[];
  popular?: boolean;
  calories?: number;
}

export interface AdaptogenInfo {
  id: string;
  name: string;
  commonName: string;
  scientificName: string;
  benefit: string;
  icon: string;
  color: string;
  description: string;
  dosage: string;
  bestFor: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  customization?: {
    milk?: string;
    sweetness?: string;
    extraMushroom?: string;
    temperature?: string;
  };
}
