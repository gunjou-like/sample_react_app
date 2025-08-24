import random
import uuid

class DataGenerator:
    def __init__(self):
        self.namelist = ["キャベツ", "人参", "玉ねぎ", "水菜", "ほうれん草", "レタス"]
        self.pricelist = [198,298,398]
        self.stocklist = [10,20,30,40,50]
    def generate(self):
        return{
            "id" : str(uuid.uuid4()),
            "name" : random.choice(self.namelist),
            "price" : random.choice(self.pricelist),
            "stock" : random.choice(self.stocklist)
        }

def generate_data(times:int):
    datagenerator = DataGenerator()
    data=[]
    for i in range(times):
        newdata = datagenerator.generate()
        data.append(newdata)
    return data
