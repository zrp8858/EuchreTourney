import os
import random


class Tournament:
    def __init__(self, players):
        self.players = players
        self.roundNumber = 0
        self.partners = []
        self.tables = []

    def __repr__(self):
        tableString = self.getTablesAsString()
        return "Round: " + str(self.roundNumber) + "\n" + tableString

    def getTablesAsString(self):
        tableString = ""
        for i in range(len(self.tables)):
            tableString += "\tTable " + str(i + 1) + ":\n" + self.getPartnersAsString(i)
        return tableString

    def getPartnersAsString(self, i):
        return (
            "\t\tPair 1: "
            + str(self.tables[i][0])
            + "\n\t\tPair 2: "
            + str(self.tables[i][1])
            + "\n"
        )

    def printLeaderboard(self):
        sortedPlayers = sorted(
            self.players, key=lambda player: player.score, reverse=True
        )
        for i in range(len(self.players)):
            print("#" + str(i + 1) + ":", str(sortedPlayers[i]) + "\n")

    def printStatus(self):
        print("\n" * 100)
        self.printLeaderboard()
        print("\n")
        print(self)

    def getPlayer(self, player):
        for p in self.players:
            if p == player:
                return p

    def startTournament(self):
        self.roundNumber = 1
        self.randomizePartners()
        self.randomizeTables()

    def randomizePartners(self):
        random.shuffle(self.players)
        for i in range(int(len(self.players) / 2)):
            self.partners.append(
                [self.players[i], self.players[i + int(len(self.players) / 2)]]
            )

    def randomizeTables(self):
        random.shuffle(self.partners)
        for i in range(0, len(self.partners), 2):
            self.tables.append([self.partners[i], self.partners[i + 1]])

    def nextRound(self, scores):  # Scores is a list of scores in order of the partners
        self.roundNumber += 1
        self.updateScores(scores)
        self.updateTables(scores)

    def updateScores(self, scores):
        for pair, score in zip(self.partners, scores):
            for player in pair:
                for p in self.players:
                    if p == player:
                        p.score += score

    def updateTables(self, scores):
        winners, losers = [], []
        for table in self.tables:
            pair1Score = scores.pop(0)
            pair2Score = scores.pop(0)
            if pair1Score > pair2Score:
                [winners.append(self.getPlayer(player)) for player in table[0]]
                [losers.append(self.getPlayer(player)) for player in table[1]]
            else:
                [winners.append(self.getPlayer(player)) for player in table[1]]
                [losers.append(self.getPlayer(player)) for player in table[0]]

        self.updatePairs(winners, losers)
        self.tables = []
        for i in range(0, len(self.partners), 2):
            self.tables.append([self.partners[i], self.partners[i + 1]])

    def updatePairs(self, winners, losers):
        self.partners = []
        random.shuffle(winners)
        random.shuffle(losers)
        for p1, p2 in zip(winners, losers):
            self.partners.append([p1, p2])
