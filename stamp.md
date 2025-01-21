
# Auth

## List

#### Endpoint
| **Method** | **URL** |
|-----------|---------|
| GET     | /stamps |

#### Parameters to filter


You can set the optional "user" parameter to filter the results by user ID.
```php
/stamps?user=1

```

#### Success Response

Code `200`

```php
{
    "data" : [
        {
          "id": "56940763-18d0-4069-b8e2",
          "user_id": "1",
          "description": "description",
          "hash": "d95736a1cb535420331a104716e4900baa960f265a9d713b7479605273cd00200f3a",
          "transaction": "08ab46c71f16aa7a3211471f52bc4c",
          "notify": true,
          "explorer": "https://url.com",
          "created_at": "2025-01-15T14:41:38.000000Z",
          "updated_at": "2025-01-15T14:41:38.000000Z",
        }
    ]
}
```

#### Error Response

```php
{
    "message" : "Unauthenticated",
}
```

## Show

#### Endpoint
| **Method** | **URL**          |
|------------|------------------|
| GET        | /stamps/\{id\} |

#### Success Response

Code `200`

```php
{
    "data" : [
        {
          "id": "56940763-18d0-4069-b8e2",
          "user_id": "1",
          "description": "description",
          "hash": "d95736a1cb535420331a104716e4900baa960f265a9d713b7479605273cd00200f3a",
          "transaction": "08ab46c71f16aa7a3211471f52bc4c",
          "notify": true,
          "explorer": "https://url.com",
          "created_at": "2025-01-15T14:41:38.000000Z",
          "updated_at": "2025-01-15T14:41:38.000000Z",
        }
    ]
}
```

#### Error Response

Code `401`

```php
{
    "message" : "Unauthenticated",
}
```

## Create

#### Endpoint
| **Method** | **URL** |
|------------|---------|
| POST       | /stamps |

#### Data params

```php
{
    "description" => ["required", "string", "max:255"],
    "hash" => ["required", "string", "max:255"],
    "notify" => ["boolean"]
}
```

#### Data example

```php
{
    "description" : "description",
    "hash" : "d95736a1cb535420331a104716e4900baa960f265a9d713b7479605273cd00200f3a",
    "notify" : true
}
```


#### Success Response

Code `200`

```php
{
    "data" : [
        {
          "id": "56940763-18d0-4069-b8e2",
          "user_id": "1",
          "description": "description",
          "hash": "d95736a1cb535420331a104716e4900baa960f265a9d713b7479605273cd00200f3a",
          "transaction": "08ab46c71f16aa7a3211471f52bc4c",
          "notify": true,
          "explorer": "https://url.com",
          "created_at": "2025-01-15T14:41:38.000000Z",
          "updated_at": "2025-01-15T14:41:38.000000Z",
        }
    ]
}
```

#### Error Response

Code `401`

```php
{
    "message" : "Unauthenticated",
}
```

Code `422`

```php
{
    "message" : "The description field is required. (and 2 more errors)",
    "errors": {
        "description": [
            "The description field is required."
        ], 
        "hash": [
            "The hash field is required."
        ],
        "notify": [
            "The notify field is required."
        ],
    }
}
```
