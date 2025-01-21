
# Account

## Update

#### Endpoint
| **Method** | **URL**         |
|------------|-----------------|
| PUT        | /user |

#### Data Params

```php
{
    "name" => ["required", "string", "max:255"],
    "surnames" => ["required", "string", "max:255"],
    "email" => ["required", "string", "email", "max:255", 'unique:users,email'],
    "current_password" => ["nullable", "string"],
    "password" => ["required", "string", "confirmed"],
}
```

#### Data example

```php
{
    "name" : "YourName",
    "surnames" : "YourSurnames",
    "email" : "user@example.com",
    "current_password" : "password"
    "password" : "password123"
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
