from django.urls import path

from myapp import views



urlpatterns = [

    path('dhanwis/token/',views.GetToken.as_view()),

    path('dhanwis/portfolio/',views.PortfolioCreateListApiView.as_view()),

    path('dhanwis/portfolio/<int:pk>/',views.PortfolioRetrieveUpdateDestroy.as_view()),

    path('dhanwis/careers/',views.CareerCreateListApiView.as_view()),

    path('dhanwis/careers/<int:pk>/',views.CareerRetrieveUpdateDistroy.as_view())
    
]

