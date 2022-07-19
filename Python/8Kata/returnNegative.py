"""
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?





make_negative(1);  # return -1
make_negative(-5); # return -5
make_negative(0);  # return 0

"""


def make_negative(number):

    return int(-1 * abs(number))


# here we are using abs() to get the value in the case that it's negative to be positive before multiplying it by -1 so then we will always have a negative value
