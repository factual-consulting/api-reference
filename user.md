
# User

## List

#### Endpoint
| **Method** | **URL**     |
|-----------|-------------|
| GET     | /admin/user |

#### Parameters to filter


You can set the optional "status" parameter to filter the results by status.
```php
# status available (active, inactive)
/admin/user?status=active

```

#### Success Response

Code `200`

```php
{
    "data" : [
        {
          "id": "1",
          "name	": "YourName",
          "surnames": "YourSurnames",
          "email": "user@example.com",
          "full_name": "YourName YourSurnames - role",
          "status": "active",
          "email_verified_at": "2025-01-15T14:41:38.000000Z",
          "admin_verified_at": "2025-01-15T14:41:38.000000Z",
          "role": "user",
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
| GET        | /admin/user/\{id\} |

#### Success Response

Code `200`

```php
{
    "data" : [
        {
          "id": "1",
          "name	": "YourName",
          "surnames": "YourSurnames",
          "email": "user@example.com",
          "full_name": "YourName YourSurnames - role",
          "status": "active",
          "email_verified_at": "2025-01-15T14:41:38.000000Z",
          "admin_verified_at": "2025-01-15T14:41:38.000000Z",
          "role": "user",
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
| **Method** | **URL**          |
|------------|------------------|
| POST       | /admin/user |

#### Data params

```php
{
    "name" => ["required", "string", "max:255"],
    "surnames" => ["required", "string", "max:255"],
    "email" => ["required", "string", "email", "max:255", Rule::unique("users")],
    "password" => ["required", "string", "min:8"],
    "role" => ["required", "string"],
}
```

#### Data example

```php
{
    "name" : "YourName",
    "surnames" : "YourSurnames",
    "email" : "user@example.com",
    "password" : "password",
    "role" : "user"
}
```


#### Success Response

Code `200`

```php
{
    "data" : [
        {
          "id": "1",
          "name	": "YourName",
          "surnames": "YourSurnames",
          "email": "user@example.com",
          "full_name": "YourName YourSurnames - role",
          "status": "active",
          "email_verified_at": "2025-01-15T14:41:38.000000Z",
          "admin_verified_at": "2025-01-15T14:41:38.000000Z",
          "role": "user",
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
    "message" : "The name field is required. (and 3 more errors)",
    "errors": {
        "name": [
            "The name field is required."
        ], 
        "surnames": [
            "The surnames field is required."
        ],
        "email": [
            "The email field is required."
        ],
        "password": [
            "The password field is required."
        ],
        "role": [
            "The role field is required."
        ]
    }
}
```

## Update

#### Endpoint
| **Method** | **URL**          |
|------------|------------------|
| PUT        | /admin/user/\{id\} |

#### Data params

```php
{
    "name" => ["required", "string", "max:255"],
    "surnames" => ["required", "string", "max:255"],
    "email" => ["required", "string", "email", "max:255", 'unique:users,email'],
    "role" => ["required", "string"],
    "current_password" => ["nullable", "string"],
    "password" => ["nullable", 'required_if:current_password,!=,null', "string", "confirmed"],
}
```

#### Data example

```php
{
    "name" : "YourName",
    "surnames" : "YourSurnames",
    "email" : "user@example.com",
    "current_password" : "password"
    "password" : "password123",
    "role" : "administrador"
}
```


#### Success Response

Code `200`

```php
{
    "data" : [
        {
          "id": "1",
          "name	": "YourName",
          "surnames": "YourSurnames",
          "email": "user@example.com",
          "full_name": "YourName YourSurnames - role",
          "status": "active",
          "email_verified_at": "2025-01-15T14:41:38.000000Z",
          "admin_verified_at": "2025-01-15T14:41:38.000000Z",
          "role": "user",
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
    "message" : "The name field is required. (and 3 more errors)",
    "errors": {
        "name": [
            "The name field is required."
        ], 
        "surnames": [
            "The surnames field is required."
        ],
        "email": [
            "The email field is required."
        ],
        "password": [
            "The password confirmation does not match."
        ],
    }
}
```

## Delete

#### Endpoint
| **Method** | **URL**            |
|------------|--------------------|
| DELETE     | /admin/user/\{id\} |

#### Success Response

Code `204`

```php
{
    "executed",
}
```

#### Error Response

Code `401`

```php
{
    "message" : "Unauthenticated",
}
```

## Active

#### Endpoint
| **Method** | **URL**                      |
|------------|------------------------------|
| PATCH      | /admin/user/bulk/active |

#### Data params

We need an array with all the IDs of the users we want to active

```php
{
    "ids" => ["required", "array"],
}
```

#### Data example

```php
{
    "ids" : [
        0: '1',
        1: '2'
    ]
}
```

#### Success Response

Code `204`

```php
{
    "executed",
}
```

#### Error Response

Code `401`

```php
{
    "message" : "Unauthenticated",
}
```

## Inactive

#### Endpoint
| **Method** | **URL**                   |
|------------|---------------------------|
| PATCH      | /admin/user/bulk/inactive |

#### Data params

We need an array with all the IDs of the users we want to inactive

```php
{
    "ids" => ["required", "array"],
}
```

#### Data example

```php
{
    "ids" : [
        0: '1',
        1: '2'
    ]
}
```

#### Success Response

Code `204`

```php
{
    "executed",
}
```

#### Error Response

Code `401`

```php
{
    "message" : "Unauthenticated",
}
```
