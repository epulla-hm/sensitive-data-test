def fibonacci(n):
    if n in [0, 1]:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


def main():
    results = [fibonacci(n) for n in range(15)]
    print(f"Results: {results}")


if __name__ == "__main__":
    main()

