# Express CMS backend

## API Reference

## Get all invoices

```http
  GET /api/invoices
```

| Parameter  | Type     | Description                         |
| :--------- | :------- | :---------------------------------- |
| `per_page` | `string` | page size for invoice, default is 7 |

```
POST /api/invoices according to schema
```

```json
{
  customerName: {
    required: true,
    type: String,
  },
  salesPerson: {
    required: true,
    type: String,
  },
  note: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  soldProducts: [
    {
      name: String,
      amount: Number,
      price: Number,
    },
  ],
})
```

#### Get Invoice

```http
  GET /api/invoices/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### DELETE Invoice

```http
  GET /api/invoices/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |

Patch Invoices

```http
  PATCH /api/invoices/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |

## Products

#### Get all products

```http
  GET /api/products
```

#### Get Products

```http
  GET /api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

### DELETE , PATCH are disable in products with 405
