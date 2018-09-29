from user import *
from learning import *


l = TextLearning()
l2 = TextLearning()
for i in range(20):
    l.register_word("de", 0.9)

for i in range(4):
    l.register_word("de", 1.9)


for i in range(4):
    l.register_word("CPD", 1.1)

print( l2.predict_aux(["de", "CPD"], timedelta(hours=1)))


