from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name='getrouter'),
    path('notes/', views.GetNotes, name='GetNotes'),
    path('notes/<int:pk>/', views.GetNote, name='GetNote'),
    path('notes/create/', views.CreateNote, name='GetNoteCreate'),
    path('notes/update/<int:pk>/', views.UpdateNote, name='GetNoteUpdate'),
    path('notes/delete/<int:pk>/', views.DeleteNote, name='GetNoteDelete'),
]