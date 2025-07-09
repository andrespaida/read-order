# Read Orders Microservice

This microservice is responsible for retrieving all orders from the system.

## Tech Stack
- JavaScript (Node.js)
- GraphQL (Apollo Server)
- MariaDB
- KISS architecture

## Endpoint
- **URL:** `POST /`  
- **GraphQL Query:**

```
query {
  orders {
    id
    userId
    products
    total
    status
    createdAt
  }
}
```

## Swagger Documentation

```yaml
openapi: 3.0.0
info:
  title: Read Orders API
  version: 1.0.0
paths:
  /:
    post:
      summary: Retrieve all orders
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                query:
                  type: string
      responses:
        '200':
          description: List of orders returned successfully
```