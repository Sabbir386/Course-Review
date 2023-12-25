## Live Link : https://assignment-3-rosy-mu.vercel.app/

### Technology :

TypeScript,node.js,express.js

### Database:

mongoDb

### Libray:

mongoose

## Api Endpoint :

# create course

```
https://assignment-3-rosy-mu.vercel.app/api/course

{
    "title": "pyrthon programing Course",
    "categoryId": "123456789012345678901234",
    "price": 49.99,
    "tags": [
        {
            "name": "Progrffamgming",
            "isDeleted": false
        },
        {
            "name": "Web Devfgfelopment",
            "isDeleted": false
        }
    ],
    "startDate": "2023-01-15",
    "endDate":"2023-03-14",
    "language": "English",
    "provider": "Techff Academy",
    "details": {
        "level": "Intermediate",
        "description": "Detaifled description of the course"
    }
}

```

# get Paginated and Filtered Courses

```
https://assignment-3-rosy-mu.vercel.app/api/courses


```

# update a course

```
https://assignment-3-rosy-mu.vercel.app/api/courses/6583fb1141f0eb6ba1514ce0

sample data:
{
    "title": "Updated Title",
    "instructor": "New Instructor",
    "categoryId": "123456789012345678901234",
    "price": 59.99,
    "tags": [
        {
            "name": "Programming",
            "isDeleted": true
        },
        {
            "name": "Web Development",
            "isDeleted": false
        }
    ],
    "startDate": "2023-02-01",
    "endDate":"2023-03-14",
    "language": "Spanish",
    "provider": "Code Masters",
    "durationInWeeks": 6,
    "details": {
        "level": "Beginner",
        "description": "Detailed description of the course"
    }
}

```

# get course with reviews

```
https://assignment-3-rosy-mu.vercel.app/api/courses/6589751a14393505f44ae34b/reviews

```

# get best course on average rating

```
https://assignment-3-rosy-mu.vercel.app/api/course/best


```

# create a review

```
https://assignment-3-rosy-mu.vercel.app/api/reviews

{
    "courseId": "6582c9144abc60a81234f668",
    "rating": 4,
    "review": "best course!"
}

```

# create a categories

```
https://assignment-3-rosy-mu.vercel.app/api/categories
{
    "name": "Programming"
}

```

# get categories

```
https://assignment-3-rosy-mu.vercel.app/api/categories

```
