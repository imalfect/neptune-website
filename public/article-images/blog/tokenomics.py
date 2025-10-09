from matplotlib import pyplot as plot
import math

class Neptune:
    @staticmethod
    def blocks_per_halving(halving_period, block_interval):
        halving_period_in_minutes = halving_period * 365.25 * 24 * 60
        return halving_period_in_minutes / block_interval
    
    @staticmethod
    def block_reward(block_height):
        premine = 831600.0 # coins, 1.98% of 42'000'000
        competitive_mine = 42000000.0 - premine # coins
    
        num_blocks_per_halving = Neptune.blocks_per_halving(3.0, Neptune.block_interval())
    
        if block_height == 0:
            return premine
    
        epoch = 1 + (block_height - 1) // num_blocks_per_halving
    
        return float(competitive_mine) / num_blocks_per_halving / (2.0**epoch)
    
    @staticmethod
    def blocks_per_epoch():
        premine = 831600.0 # coins, 1.98% of 42'000'000
        competitive_mine = 42000000.0 - premine # coins
    
        initial_block_reward = 128.0 # coins
    
        # float(competitive_mine // 2) / initial_block_reward == 160814.0625
        return math.floor(float(competitive_mine // 2) / initial_block_reward)

    @staticmethod
    def block_interval():
        halving_period = 3.0 # years
        minutes_per_epoch = halving_period * 365.25 * 24 * 60
    
        return minutes_per_epoch / Neptune.blocks_per_epoch()

    @staticmethod
    def blocks_per_year():
        return 365.25 * 24 * 60 / Neptune.block_interval()

class Bitcoin:
    @staticmethod
    def blocks_per_halving():
        return 210000

    @staticmethod
    def block_reward(block_height):
        premine = 0.0 # coins, 0% of 21'000'000
        competitive_mine = 21000000.0 - premine # coins
    
        num_blocks_per_halving = Bitcoin.blocks_per_halving()
    
        epoch = 1 + (block_height - 1) // num_blocks_per_halving
    
        return float(competitive_mine) / float(num_blocks_per_halving) / (2.0**epoch)

    @staticmethod
    def block_interval():
        return 10.0 # minutes

    @staticmethod
    def blocks_per_year():
        return 365.25 * 24 * 60 / Bitcoin.block_interval()

def neptune_money_supply_graph():
    timespan = 15 # years

    block_rewards = [Neptune.block_reward(i) for i in range(int((timespan+1) * Neptune.blocks_per_year()))]
    print("block interval:", Neptune.block_interval(), "minutes, or", Neptune.block_interval() * 60.0, "seconds")
    print("blocks per epoch:", Neptune.blocks_per_epoch())

    acc = 0
    money_supply = [0.0] * len(block_rewards)
    for i in range(len(block_rewards)):
        money_supply[i] = acc + block_rewards[i]
        acc = money_supply[i]

    years = [2023 + i for i in range(timespan)]
    blocks_per_year = Neptune.blocks_per_year()
    money_at_year = [money_supply[int(i * blocks_per_year)] for i in range(timespan)]
    
    fig, ax = plot.subplots()
    plot.plot([years[0]] + years, [0.0] + [(may / 1000000.0) for may in money_at_year], label="money supply")
    plot.plot(years, [42] * len(years), linestyle="dashed", color="gray")
    ax.set_xticks(years[::3])
    ax.annotate("asymptotic limit", xy=(2023, 40))
    ax.annotate("premine", xy=(2023.1, 0.4), xytext=(2024, 1), arrowprops=dict(arrowstyle="->"), xycoords="data")
    plot.title("money supply (millions)")
    plot.show()

def neptune_premine_piechart():
    premine = 831600.0 # coins, 1.98% of 42'000'000
    competitive = 42000000-premine

    sizes = [premine, competitive]
    explode = (1.0, 0.0)

    fig, ax = plot.subplots()
    ax.pie(sizes, explode=explode)
    ax.annotate("competitive mining: 98.02%", xy=(-0.75, 0.25))
    ax.annotate("premine: 1.98%", xy=(1.15, -0.1))
    plot.title("proportion of premine")
    plot.show()

def neptune_premine_proportion_graph():
    timespan = 15 # years

    block_rewards = [Neptune.block_reward(i) for i in range(int((timespan+1) * Neptune.blocks_per_year()))]

    acc = 0
    money_supply = [0.0] * len(block_rewards)
    for i in range(len(block_rewards)):
        money_supply[i] = acc + block_rewards[i]
        acc = money_supply[i]

    premine = 831600.0 # coins, 1.98% of 42'000'000


    period = 0.1 # fraction of year
    times = [2023 + 0.1*i for i in range(int(timespan/period))]

    blocks_per_period = Neptune.blocks_per_year() * period
    money_at_time = [money_supply[int(i * blocks_per_period)] for i in range(int(timespan/period))]
    
    fig, ax = plot.subplots()
    plot.fill([2023.0] + times + [2023.0+timespan], [0.0] + [(premine / mat) for mat in money_at_time] + [0.0])
    plot.fill([2023.0] + times + [2023.0+timespan], [1.0] + [(premine / mat) for mat in money_at_time] + [1.0])

    ax.annotate("competitive mining", xy=(2025, 0.35))
    ax.annotate("premine", xy=(2023.5, 0.05), xytext=(2025, 0.15), arrowprops=dict(arrowstyle="->"), xycoords="data")

    plot.title("premine proportion over time")
    ax.set_xticks([2023 + i for i in range(timespan)][::3])
    plot.show()

def stock_to_flow_graph():
    timespan = 100 # years

    # neptune
    block_rewards = [Neptune.block_reward(i) for i in range(int((timespan+1) * Neptune.blocks_per_year()))]

    acc = 0
    money_supply = [0.0] * len(block_rewards)
    stock_to_flow = [0.0] * len(block_rewards)
    for i in range(len(block_rewards)):
        money_supply[i] = acc + block_rewards[i]
        acc = money_supply[i]
        stock_to_flow[i] = math.log(money_supply[i] / (block_rewards[i] * Neptune.blocks_per_year()))

    period = 0.1 # fraction of year
    times = [2023 + 0.1*i for i in range(int(timespan/period))]

    blocks_per_period = Neptune.blocks_per_year() * period
    s2f_at_time = [stock_to_flow[int(i * blocks_per_period)] for i in range(int(timespan/period))]
    
    fig, ax = plot.subplots()
    plot.plot(times, s2f_at_time, label="neptune")
 
    # bitcoin
    block_rewards = [Bitcoin.block_reward(i) for i in range(int((timespan+1) * Bitcoin.blocks_per_year()))]

    acc = 0
    money_supply = [0.0] * len(block_rewards)
    stock_to_flow = [0.0] * len(block_rewards)
    for i in range(len(block_rewards)):
        money_supply[i] = acc + block_rewards[i]
        acc = money_supply[i]
        stock_to_flow[i] = math.log(money_supply[i] / (block_rewards[i] * Bitcoin.blocks_per_year()))

    period = 0.1 # fraction of year
    times = [2009 + 0.1*i for i in range(int(timespan/period))]

    blocks_per_period = Bitcoin.blocks_per_year() * period
    s2f_at_time = [stock_to_flow[int(i * blocks_per_period)] for i in range(int(timespan/period))]
    
    plot.plot(times, s2f_at_time, label="bitcoin")
       

    plot.title("stock-to-flow")
    plot.ylabel("ln s2f")
    plot.ylim(-1.0, 18.0)
    ax.set_xticks([2010 + i for i in range(timespan)][::10])
    plot.xlim(2008.0, 2096.0)
    plot.legend()
    plot.show()

def bitcoin_money_supply_graph():
    timespan = 25 # years

    block_rewards = [Bitcoin.block_reward(i) for i in range(int((timespan+1) * Bitcoin.blocks_per_year()))]
    print("block_rewards (coins):", reversed(sorted(list(set(block_rewards)))))
    print("block interval:", Bitcoin.block_interval(), "minutes, or", Bitcoin.block_interval() * 60.0, "seconds")

    acc = 0
    money_supply = [0.0] * len(block_rewards)
    for i in range(len(block_rewards)):
        money_supply[i] = acc + block_rewards[i]
        acc = money_supply[i]

    years = [2009 + i for i in range(timespan)]
    blocks_per_year = Bitcoin.blocks_per_year()
    money_at_year = [money_supply[int(i * blocks_per_year)] for i in range(timespan)]
    
    fig, ax = plot.subplots()
    plot.plot(years, [(may / 1000000.0) for may in money_at_year], label="money supply")
    plot.plot(years, [21] * len(years), linestyle="dashed", color="gray")
    ax.set_xticks(years[::4])
    ax.annotate("asymptotic limit", xy=(2009, 20))
    plot.title("money supply (millions)")
    plot.show()


if __name__ == "__main__":
    neptune_money_supply_graph()
    #neptune_premine_piechart()
    #neptune_premine_proportion_graph()
    #bitcoin_money_supply_graph()
    #stock_to_flow_graph()

