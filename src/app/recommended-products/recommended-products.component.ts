import { Component } from '@angular/core';

interface IProduct {
  title: string;
  description: string;
  imageCover: string;
  price: number;
  quantity: number;
  images: string[];
  onSale: boolean;
}

@Component({
  selector: 'app-recommended-products',
  imports: [],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css',
})
export class RecommendedProductsComponent {
  recommendProductsList: IProduct[] = [
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266805-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266807-4.jpeg',
      ],
      onSale: true,
    },
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156554-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156556-4.jpeg',
      ],
      onSale: false,
    },
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266805-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266807-4.jpeg',
      ],
      onSale: true,
    },
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838330-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-5.jpeg',
      ],
      onSale: true,
    },
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266805-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266807-4.jpeg',
      ],
      onSale: true,
    },
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tBeige\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563605-cover.jpeg',
      price: 349,
      quantity: 228,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563675-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-5.jpeg',
      ],
      onSale: false,
    },
    {
      title: 'Woman Shawl',
      description:
        'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266805-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266807-4.jpeg',
      ],
      onSale: true,
    },
  ];
}
