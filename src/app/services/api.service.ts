import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  projects = [
    {
      Title: 'WhatsApp Web Clone',
      VideoUrl:
        'https://user-images.githubusercontent.com/119840303/234886797-00d56c78-89e1-4894-81f0-b2b1e1f27030.mp4',
    },
    {
      Title: 'E-Commerce Website',
      VideoUrl:
        'https://user-images.githubusercontent.com/119840303/232341478-42b2ab8d-25a2-4e55-9b42-ed5e6c0ee594.mp4',
    },
    {
      Title: 'Air Ticket Reservation System',
      VideoUrl:
        'https://user-images.githubusercontent.com/119840303/234994204-f596b535-2d64-4803-ad05-e7ff8146a77c.mp4',
    },
    {
      Title: 'Short NEWS Website',
      VideoUrl:
        'https://user-images.githubusercontent.com/119840303/235237863-807cbbec-ec5a-4b6b-8b0c-463baab59c61.mp4',
    },
    {
      Title: 'TODO Task App',
      VideoUrl:
        'https://user-images.githubusercontent.com/119840303/232902482-4b33a148-b8f1-4f5d-9245-06d69374c8f0.mp4',
    },
  ];
}
