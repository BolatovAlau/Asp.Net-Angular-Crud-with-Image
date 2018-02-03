# Asp.Net MVC + Angular CRUD Application

Hi guys. This project in fact was a task of interviewer. 
Employer told me to do CRUD application (Create, Read, Update and Delete).
The application also should has a filter, a grouping and an imageUploading functionality.
The code is not perfect but works. 

### Installing

If you found a bag or something just like this, 
write in issues, we will try to solve the problem.
The data is stored in .mdf database file, so you have to create database1.mdf file. 
Here's a t-sql code for creating table

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