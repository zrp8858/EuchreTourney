class Player:
    def __init__(self, name):
        self.name = name
        self.score = 0

    def __repr__(self):
        return self.name + '(' + str(self.score) + ')'

    def __eq__(self, other):
        if isinstance(other, Player):
            return self.name == other.name
        return False

    def addScore(self, score):
        self.score += score
