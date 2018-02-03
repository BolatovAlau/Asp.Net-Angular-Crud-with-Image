# Asp.Net MVC + Angular CRUD Application

Hi guys. This project in fact was a task of interviewer. 
Employer told me to do CRUD application (Create, Read, Update and Delete).
The application also should has filter, grouping, validation and an imageUploading functionality.

### Installing

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

### Thanks

This is my first project in Github and If you found this project useful please star it.  
If you found a bag, suggestions or something just like this, 
write it on the issues, we will try to solve the problem.

### License

MIT