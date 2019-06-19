from django.urls import path,include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import invoice,DeleteUpdate,Details,DetailsDeleteUpdate
urlpatterns = [
    path('invoice/<int:id>/', DeleteUpdate.as_view()),
    path('invoicedetails/<int:id>/', DetailsDeleteUpdate.as_view()),
    path('invoicedetails/', Details.as_view()),
    path('' , invoice.as_view()),
    
]
urlpatterns = format_suffix_patterns(urlpatterns)