#!/usr/bin/node
class Rectangle:
    def __init__(self, w, h):
        if w <= 0 or h <= 0:
            self.width = None
            self.height = None
        else:
            self.width = w
            self.height = h
