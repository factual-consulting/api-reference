
# Auth

## Login

#### Endpoint
| **Method** | **URL**     |
|----------|-------------|
| POST     | /login |

#### Data Params

```php
{
    "email" => ["required", "string", "email"],
    "password" => ["required", "string"],
}
```

#### Data example

```php
{
    "email" : "user@example.com",
    "password" : "password"
}
```

#### Success Response

```php
{
    "access_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
    "token_type" : "bearer",
    "expires_in" : 5184000,
    "ttl": 86400
}
```

#### Error Response

```php
{
    "message" : "The given data was invalid.",
    "errors": {
        "email": [
            "The email field is required."
        ],
        "password": [
            "The password field is required."
        ]
    }
}
```

## Logout

#### Endpoint
| **Method** | **URL** |
|----------|---------|
| POST     | /logout |

#### Success Response

```php
{
    "message" : "success",
}
```

#### Error Response

```php
{
    "message" : "Unauthenticated",
 
}
```
