import os

from Model.player import Player
from Model.tournament import Tournament


def main():
    numPlayers = int(input('Enter number of players: '))
    players = []
    for i in range(numPlayers):
        players.append(Player(input(f'Enter player {i + 1}: ')))

    tourney = Tournament(players)
    tourney.startTournament()
    tourney.printStatus()

    while 1:
        scores = []
        for i in range(int(numPlayers / 2)):
            scores.append(int(input(f'Enter score for pair {i + 1}: ')))
        tourney.nextRound(scores)

        sentinel = input('Would you like to play again? (y/n): ')
        if sentinel == 'y':
            tourney.printStatus()
        else:
            print("\n" * 100)
            print('Final Standings:\n')
            tourney.printLeaderboard()
            break


if __name__ == '__main__':
    main()

