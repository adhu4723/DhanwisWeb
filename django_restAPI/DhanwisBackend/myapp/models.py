from django.db import models



from django.contrib.auth.models import User


    

    

class Portfolio(models.Model):
    
    project_name=models.CharField(max_length=200)

 
    image = models.ImageField(upload_to="project_pic", default="project_pic/default.png", null=True)


    link=models.CharField(max_length=300,null=True)

    project_discription=models.CharField(max_length=500,null=True)

    work_options=(
        ("website","website"),

        ("graphic design","graphic design")

    )

    work=models.CharField(max_length=200,choices=work_options,default="website")

    owner=models.ForeignKey(User,on_delete=models.CASCADE,related_name="portfolios")


    def __str__(self):
        return self.project_name



class Career(models.Model):


    discription=models.CharField(max_length=500)

    job_options=(
        ("Python Developer","Python Developer"),
        ("Mern Stack","Mern Stack"),
        ("Digital Marketing","Digital Marketing"),
        ("Graphic Design","Graphic Design")
    )

    job=models.CharField(max_length=200,choices=job_options,default="pythondeveloper")

    created_date=models.DateTimeField(auto_now_add=True)

    updated_date=models.DateTimeField(auto_now=True)

    owner=models.ForeignKey(User,on_delete=models.CASCADE,related_name="jobs")



