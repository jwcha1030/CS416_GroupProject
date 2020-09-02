# https://www.django-rest-framework.org/api-guide/pagination/#custom-pagination-styles
from django.conf import settings
from rest_framework import pagination
from rest_framework.response import Response


class CustomPagination(pagination.PageNumberPagination):
	extra_attributes = {}

	def set_extra_attributes(self, extra):
		self.extra_attributes = extra

	def get_paginated_response(self, data):
		return Response({
			# add my custom properties
			'res_code': settings.RES_CODE_SUCCESS,
			'res_msg': 'success',
			'next': self.get_next_link(),
			'previous': self.get_previous_link(),
			'count': self.page.paginator.count,
			'results': data,
			'extra_data': self.extra_attributes
		})

class GetQuerysetExceptPagination(pagination.PageNumberPagination):
	extra_attributes = {}

	def set_res(self, code, msg):
		self.res_code_att = code
		self.res_msg_att = msg

	def set_extra_attributes(self, extra):
		self.extra_attributes = extra

	def get_paginated_response(self, data):
		return Response({
			# add my custom properties
			'res_code': self.res_code_att,
			'res_msg': self.res_msg_att,
			'next': self.get_next_link(),
			'previous': self.get_previous_link(),
			'count': self.page.paginator.count,
			'results': data,
			'extra_data': self.extra_attributes
		})