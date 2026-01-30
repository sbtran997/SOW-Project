# THIS IS THE PYTHON TESTING AREA FOR SUBMITTED FORM INFORMATION ON STRING LIMITS
import json
import unittest # INSTALL AND IMPORT THE UNITTEST LIBRARY FROM PYTHON
import os
import re

# TESTING FILE: IDEA IS THAT MESSY INPUT IS CLEANED AND PREPPED INTO A JSON, JSON SENT TO FILE STASH
# AND AUTOGRADER HERE DETERMINES WHETHER OR NOT THE INPUT IS VALID HERE

from pydantic import BaseModel

class Form(BaseModel):
    name: str
    description: str

class StringLimitsTests(unittest.TestCase):
        # TEST THAT FORM BECOMES JSON CONTENT IN THE JSON FILE
        def test_string_empty1(self):
            path = os.getcwd() + '\\File_Stash\\test2.json'
            with open(path, 'r') as json_file:
                data = json.load(json_file)
                form_prep = Form(**data)
                unittest.TestCase.assertIsNotNone(self,obj=data)
            json_file.close()

        def test_string_empty2(self):
            path2 = os.getcwd() + '\\File_Stash\\test3.json'
            with open(path2, 'r') as json_file:
                data = json.load(json_file)
                form_prep = Form(**data)
                unittest.TestCase.assertIsNotNone(self,obj=data)
            json_file.close()

        # TEST THAT THE CONTENT OF THE STRINGS IS ONLY NUMBERS AND CHARACTERS, NO SYMBOLS

        def test_character_content1(self):
            path = os.getcwd() + '\\File_Stash\\test2.json'
            with open(path, 'r') as json_file:
                data = json.load(json_file)
                form_prep = Form(**data)
                unittest.TestCase.assertIs(self,True,bool(re.search("[A-Za-z0-9]+",form_prep.name)))
                unittest.TestCase.assertIs(self, True, bool(re.search("[A-Za-z0-9]+", form_prep.description)))
            json_file.close()

        def test_character_content2(self):
            path = os.getcwd() + '\\File_Stash\\test3.json'
            with open(path, 'r') as json_file:
                data = json.load(json_file)
                form_prep = Form(**data)
                unittest.TestCase.assertIs(self, True, bool(re.search("[A-Za-z0-9]+", form_prep.name)))
                unittest.TestCase.assertIs(self, True, bool(re.search("[A-Za-z0-9]+", form_prep.description)))
            json_file.close()

        # ASSERT THAT CHARACTER LIMITS ARE MAINTAINED IN THE FILE: GREATER THAN 0 LESS THAN 26 (0<strings<=26)
        def test_character_length1(self):
            path = os.getcwd() + '\\File_Stash\\test2.json'
            with open(path, 'r') as json_file:
                data = json.load(json_file)
                form_prep = Form(**data)
                unittest.TestCase.assertIs(self, True, 0 < form_prep.name.__len__() <= 26)
                unittest.TestCase.assertIs(self, True, 0 < form_prep.description.__len__() <= 26)
            json_file.close()

        def test_character_length2(self):
            path = os.getcwd() + '\\File_Stash\\test3.json'
            with open(path, 'r') as json_file:
                data = json.load(json_file)
                form_prep = Form(**data)
                unittest.TestCase.assertIs(self, True, 0 < form_prep.name.__len__() <= 26)
                unittest.TestCase.assertIs(self, True, 0 < form_prep.description.__len__() <= 26)
            json_file.close()

        def test_character_length3(self):
            path = os.getcwd() + '\\File_Stash\\test4.json'
            with open(path, 'r') as json_file:
                data = json.load(json_file)
                form_prep = Form(**data)
                print(form_prep.name.__len__())
                unittest.TestCase.assertIs(self, True, 0 < form_prep.name.__len__() <= 26)
                unittest.TestCase.assertIs(self, True, 0 < form_prep.description.__len__() <= 26)
            json_file.close()


