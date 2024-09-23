class ListNode
  attr_accessor :val, :next
  def initialize(val = 0, _next = nil)
    @val = val
    @next = _next
  end
end


def delete_duplicates(head)
  current = head

  while current && current.next
    if current.val == current.next.val
      current.next = current.next.next
    else
      current = current.next
    end
  end
  
  head
end

def array_to_list(arr)
  return nil if arr.empty?
  
  head = ListNode.new(arr[0])
  current = head
  arr[1..-1].each do |val|
    current.next = ListNode.new(val)
    current = current.next
  end
  head
end

def print_list(head)
  current = head
  while current
    print "#{current.val} "
    current = current.next
  end
  puts
end

arr = [1, 1, 2, 3, 3]
head = array_to_list(arr)

new_head = delete_duplicates(head)

print_list(new_head)
