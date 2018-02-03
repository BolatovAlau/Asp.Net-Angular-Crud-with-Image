# Asp.Net MVC + Angular CRUD Application

Hi guys. This project in fact was a task of interview. 
Employer told me to do CRUD application (Create, Read, Update and Delete) 
The application also should has a filter, a grouping and an imageUploader.
This project is just done so code is weak but it works
Made with love and with principe "if it works don't touch it"
hahahahhaha

### Installing

Everithing is here, if you found a bag or something just like this, 
write we my friend, we will try to solve the problem, at least we will try
hahahhahahahha
the dota stored in .mdf database file, so you have to create a database 
which name is database.mdf. Here's a t-sql code

```
CREATE TABLE [dbo].[Workers] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (50) NOT NULL,
    [Surname]     NVARCHAR (50) NOT NULL,
    [MiddleName]  NVARCHAR (50) NOT NULL,
    [Sex]         NVARCHAR (50) NOT NULL,
    [Photo]       NVARCHAR (50) NULL,
    [Position]    NVARCHAR (50) NOT NULL,
    [Subdivision] NVARCHAR (50) NOT NULL,
    [CreateDep]   BIT           NOT NULL,
    [CloseDep]    BIT           NOT NULL,
    [OkDep]       BIT           NOT NULL,
    [OkOpenDep]   BIT           NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);
```

## License

MIT